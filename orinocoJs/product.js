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
              <p class="card-text">Prix: ${teddy.price/100} &euro;</p>
                <div id="quantityLayout">   
                  <p >Quantité:</p>             
                      <button id="subtractBtn" type="button">-</button>
                      <span id="counter"></span>
                      <button id="addBtn" type="button">+</button>
                </div>
              <label for="color-select" id="color-select">Couleur</label>
                <select name="colorSelection" id="colorSelection">
                </select>
                <div id="buttonsLayout">
                  <button class="btn btn-primary" type="button" id="command">Ajouter</button>
                  <a href="basket.html"><button class="btn btn-primary" type="button">Aller au panier</button></a>
              </div>
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
        counter.innerHTML = quantity;       
      })
    
      // Données à récupérer pour le localStorage; cartArray englobe cart.
      let cartArray;
      // let cart = {
      //   name: teddy.name,
      //   image: teddy.imageUrl,
      //   price: teddy.price,
      //   id: teddy._id,
      //   quantity: quantity
      // };


      //Fonction vérifiant le contenu du localStorage.

      let addTeddy = document.getElementById("command");
      
      /*Autre façon de faire:
          const cartArray = JSON.parse(localStorage.getItem("basketShop")) || []
      */
      function testLocalStorage (){

        if (localStorage.getItem("basketShop") === null){
          cartArray = [];
        }
        else{
          cartArray = JSON.parse(localStorage.getItem("basketShop"));
          console.log(cartArray);
        };
        return cartArray;        
      };

      //Fonction d'ajout de produit.
      addTeddy.addEventListener("click", function addProduct (){
      
        testLocalStorage();
        cartArray.push({
          name: teddy.name,
          image: teddy.imageUrl,
          price: teddy.price/100,
          id: teddy._id,
          quantity: quantity
        });    
        localStorage.setItem("basketShop", JSON.stringify(cartArray));       
      });


})
    

    .catch(error => console.log('error', error));
};

teddyDisplay();


