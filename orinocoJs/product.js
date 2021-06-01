const searchUrl = new URL(window.location.href); //Obtention de l'URL du produit consulté.
const searchId = searchUrl.searchParams.get("id"); //Obtention de l'id.


const myContainer = document.getElementById("myContainer");

//Fonction d'affichage dynamique du produit.
function teddyDisplay() {
  fetch(`http://localhost:3000/api/teddies/${searchId}`)
    .then(response => response.json())
    .then((teddy) => {

      let productCard = "";
      productCard =
        `
        <section class="card mb-3">
          <img src="${teddy.imageUrl}" id="img" class="card-img-top" alt="Photographie du produit">
          <div class="card-body">
            <h5 class="card-title" id="name" value="${teddy.name}">${teddy.name}</h5>
              <p class="card-text">${teddy.description}</p>
              <p class="card-text">Prix: ${teddy.price}</p>

              <p class="card-text">Quantité:</p>                
                  <button id="removeBtn" type="button">-</button>
                  <span id="counter"></span>
                  <button id="addBtn" type="button">+</button>
                
              <label for="color-select" id="color-select">Couleur</label>
                <select name="colorSelection" id="colorSelection">
                </select>
              <button class="btn btn-primary" type="button" id="command">Ajouter</button>
              <a href="basket.html"><button class="btn btn-primary" type="button">Aller au panier</button></a>
          </div>
        </section>
      `;

      myContainer.innerHTML = productCard;

      //Fonction créant les options de couleurs selon les données envoyées par l'API
      teddy.colors.forEach(function (choice) {

        let optionValue = document.getElementById("colorSelection");
        let option = document.createElement("option");
        option.textContent = `${choice}`;
        option.setAttribute("value", `${choice}`)
        optionValue.add(option);
      });

      //Boutons de gestion de la quantité d'un produit.

      let counter = document.getElementById("counter");
      let removeBtn = document.getElementById("removeBtn");
      let addBtn = document.getElementById("addBtn");
      let quantity = 0;

      counter.innerHTML = quantity;
      counter.setAttribute("value", quantity)

      //Gestion de la quantité d'oursons.

      
      
      addBtn.addEventListener("click", function(){

        quantity++;
        counter.innerHTML = quantity;
        counter.setAttribute("value", quantity);
      })
      
      removeBtn.addEventListener("click", function(){

        quantity--;
        counter.innerHTML = quantity;
        counter.setAttribute("value", quantity);
      })
      
      // Données à récupérer pour le localStorage; cartArray englobe cart.
      let cartArray;
      let cart = {
        name: teddy.name,
        image: teddy.imageUrl,
        price: teddy.price,
        id: teddy._id,
        quantity: 1
      };

      //Fonction vérifiant le contenu du localStorage.
      function testLocalStorage (){

        if (localStorage.getItem("basketShop") === null){
          cartArray = [];
        }
        else{
          cartArray = JSON.parse(localStorage.getItem("basketShop"));
        };
        return cartArray;        
      };



      //Fonction d'ajout de produit.

      let addTeddy = document.getElementById("command");
      addTeddy.addEventListener("click", function addProduct (){
      
        testLocalStorage();
        cartArray.push(cart);    
        localStorage.setItem("basketShop", JSON.stringify(cartArray));       
      });


})
    

    .catch(error => console.log('error', error));
};


