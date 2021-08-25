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
    const price = teddy.price / 100;
    const productCart =
        `
        <section class="card mb-3">
        <div class="col-7">
            <img src="${teddy.imageUrl}" id="img-teddy" class="card-img-top" alt="Photographie du produit">
        </div>
            <div class="card-body">
                <h5 class="card-title" id="name" value="${teddy.name}">${teddy.name}</h5>
                    <p class="card-text">${teddy.description}</p>
                    <p class="card-text">Prix: ${price} &#128</p>
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
                            <a href="#" id="basketLink" class="btn btn-secondary" type="button">Aller au panier</a>
                        </div>
                </div>
        </section>
        `;

    myContainer.innerHTML = productCart;

//-------------------------------------------------------------------------



    const optionValue = document.getElementById("colorSelection");

//-------------------------------------------------------------------------

      //Fonction créant les options de couleurs selon les données envoyées par l'API.

      teddy.colors.forEach(function (choice) {

        const option = document.createElement("option");
        option.textContent = `${choice}`;
        option.setAttribute("value", `${choice}`)
        optionValue.add(option);
      });

//-------------------------------------------------------------------------

      //Boutons de gestion de la quantité d'un produit.

      let counter = document.getElementById("counter");
      let subtractBtn = document.getElementById("subtractBtn");
      let addBtn = document.getElementById("addBtn");
      let quantity = 1;

      counter.innerHTML = quantity;

//-------------------------------------------------------------------------

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

//-------------------------------------------------------------------------

    //Gestion de l'affichage de l'icone panier et du bouton Aller au panier.

    document.getElementsByClassName("navbar-nav")[0].style.display = "none";

    
    let test = document.getElementById("basketLink");

      if(localStorage.getItem("basketShop") !== null){

        document.getElementsByClassName("navbar-nav")[0].style.display = "block";
        test.classList.remove("btn-secondary");
        test.classList.add("btn-dark");
        test.setAttribute("href", "basket.html")
      }

// console.log(localStorage.getItem("basketShop").length);

//-------------------------------------------------------------------------

    //Gestion du localStorage à l'ajout du produit.

    let storageManagement;

      getStorage = function getLocalStorage(){

        return JSON.parse(localStorage.getItem("basketShop")) || [];
      }

      let commandBtn = document.getElementById("command");
      commandBtn.addEventListener("click", command);

      function checkProduct(product){
        return product.id === teddy._id;
      }

      function command(){

        storageManagement = getStorage();
        
        if(storageManagement.length === 0){
          storageManagement.push({

            name: teddy.name,
            description: teddy.description,
            image: teddy.imageUrl,
            id: teddy._id,
            quantity: quantity,
            price: quantity * teddy.price,
            color: optionValue.value
          });
        window.location.reload();

        }
        else{
          //Vérification si array contient le produit.
          let existingProduct = storageManagement.find(checkProduct);
          if (existingProduct){
            existingProduct.quantity += quantity;
            existingProduct.price += quantity * teddy.price;
          } else{
            storageManagement.push({

              name: teddy.name,
              description: teddy.description,
              image: teddy.imageUrl,
              id: teddy._id,
              quantity: quantity,
              price: quantity * teddy.price,
              color: optionValue.value
            });
          }
      }

        localStorage.setItem("basketShop", JSON.stringify(storageManagement));
      }

    }
)

.catch(error => console.log('error', error));


