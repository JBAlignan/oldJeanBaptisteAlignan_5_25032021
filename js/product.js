const searchUrl = new URL(window.location.href); // Obtention de l'URL du produit consulté.
const searchId = searchUrl.searchParams.get('id'); // Obtention de l'id du produit.


// Sélection de l'élément <main> dans le DOM.
// Création d'une variable vide de type string.

const myContainer = document.getElementById("myContainer");



// Recherche des données de l'ourson consulté via fetch.
// Création et insertion du code html de l'ourson consulté.

fetch(`http://localhost:3000/api/teddies/${searchId}`)
.then(response => response.json())
.then((teddy) => {
  console.log(teddy);
  console.log(typeof teddy);
  console.log(teddy._id)
    
    const productCart =
        `
        <section class="card mb-3">
        <div class="col-7">
            <img src="${teddy.imageUrl}" id="img-teddy" class="card-img-top" alt="Photographie du produit">
        </div>
            <div class="card-body">
                <h5 class="card-title" id="name" value="${teddy.name}">${teddy.name}</h5>
                    <p class="card-text">${teddy.description}</p>
                    <p class="card-text">Prix: ${teddy.price}</p>
                        <div id="quantityLayout" class="mb-3">
                            <p>Quantité:</p>             
                                <button id="subtractBtn" type="button" class="btn-sm btn-dark">-</button>
                                <span id="counter"></span>
                                <button id="addBtn" type="button" class="btn-sm btn-dark">+</button>
                        </div>
                    <label for="color-select" id="color-select" class="mb-4">Couleur</label>
                        <select name="colorSelection" id="colorSelection">
                        </select>
                        <div id="buttonsLayout">
                            <button class="btn btn-dark" type="button" id="command">Ajouter</button>
                            <a href="basket.html"><button class="btn btn-dark" type="button">Aller au panier</button></a>
                        </div>
                </div>
        </section>
        `;

    myContainer.innerHTML = productCart;


      //Fonction créant les options de couleurs selon les données envoyées par l'API
      teddy.colors.forEach(function (choice) {

        const optionValue = document.getElementById("colorSelection");
        const option = document.createElement("option");
        option.textContent = `${choice}`;
        option.setAttribute("value", `${choice}`)
        optionValue.add(option);
      });


      //Boutons de gestion de la quantité d'un produit.

      let counter = document.getElementById("counter");
      let subtractBtn = document.getElementById("subtractBtn");
      let addBtn = document.getElementById("addBtn");
      let quantity = 1;

      counter.innerHTML = quantity;


      //Gestion de la quantité d'oursons.

      addBtn.addEventListener("click", function(){

        quantity++;
        counter.innerHTML = quantity;
      })
      
      subtractBtn.addEventListener("click", function(){

        quantity--;
        if (quantity < 1) {
          quantity = 1;
        }
        counter.innerHTML = quantity;
      })



      // Gestion du localStorage à l'ajout du produit.

      let storageManagement;

      function getLocalStorage () {

        return localStorage.getItem("basketShop") || [];

        // if(localStorage.getItem("basketShop") === null) {
        //   storageManagement = [];
        // }
        // else {
        //   localStorage.setItem("basketShop", JSON.stringify(teddy));
        // }
        // return storageManagement;
      }

      let commandBtn = document.getElementById("command");
      commandBtn.addEventListener("click", command);

      function command(){

        storageManagement = getlocalStorage();
        storageManagement.push({

          name: teddy.name,
          description: teddy.description,
          image: teddy.imageUrl,
          id: teddy._id,
          quantity: quantity,
          price: quantity * teddy.price
        });

        localStorage.setItem("basketShop", JSON.stringify(storageManagement));
      }
    }
)

.catch(error => console.log('error', error));


