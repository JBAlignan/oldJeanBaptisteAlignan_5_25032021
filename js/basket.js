const myContainer = document.getElementById("myContainer");
let productDisplay = JSON.parse(localStorage.getItem("basketShop"));
let selectedProduct;
let optionValue;

//Gestion de l'affichage des produits du panier.
function basketDisplay(){

      let cartContainer = [""];
      
      productDisplay.forEach(function(element){       
        const totalPrice = (element.price * element.quantity) / 100;
        cartContainer +=
        `<article id="${element.id}" value ="${element.id}" class = "col-lg-6">     
          <div class = "card mb-3">             
            <div class = "row g-0">        
              <div class = "col-md-4">        
                <img src="${element.image}" alt="${element.name}">
              </div>
              <div class = "col-md-8">        
                <div class = "card-body">       
                  <h5 class = "card-title" >${element.name}</h5>
                    <p class = "card-text" > Quantité: ${element.quantity}</p>
                    <p class = "card-text" > Prix: ${totalPrice} &#128</p>
                    <button onclick="removeItem('${element.id}')" id="${element.id}" class="btn btn-dark" value="${element.id}">Supprimer</button>
                    <button onclick="window.location.href='http://127.0.0.1:5501/pages/product.html?id=${element.id}'" id="editBtn" class="btn btn-dark" value="">Modifier</button>
                </div>
              </div>
            </div>
          </div>
         </article>`;

//-----------------------------------------------------

// let searchUrl = new URL(window.location.href);

// let test = searchUrl.host;
// let testDeux = searchUrl.pathname;
// console.log(testDeux.replace("/basket.html", 'product.html?id=${element.id}'));


// console.log(searchUrl);
// console.log(typeof searchUrl);

// console.log(test);
// console.log(typeof test);

// console.log(testDeux);
// console.log(typeof testDeux);

// testTrois = test + testDeux
// console.log(testTrois);
// console.log(typeof testTrois);

// let testQuatre = testTrois.replace("/basket.html", '/product.html?id=${element.id}')
// console.log(testQuatre);

//------------------------------------------------
         
      });

      //Intégration des produits dans le fichier html.    
      document.getElementById("productSection").innerHTML = cartContainer;

  };
  
  basketDisplay();


  //Bouton de suppression des articles.
  function removeItem(productId){

    productDisplay = productDisplay.filter(function(product){
      return product.id !== productId;
    });
    localStorage.setItem("basketShop", JSON.stringify(productDisplay));
    basketDisplay();
  };

  //Bouton de modification des articles.

// function changeProduct(productId){

//   selectedProduct = productDisplay.find(function(product){
//     return product.id === productId;
//   })

//   if (selectedProduct){
//     displayModifPage();
//   }
// }

// function displayModifPage(){

//   fetch(`http://localhost:3000/api/teddies/${selectedProduct.id}`)
//   .then(response => response.json())
//   .then((product) => {
  
//       const productCart =
//           `
//           <section class="card mb-3">
//           <div class="col-7">
//               <img src="${selectedProduct.image}" id="img-product" class="card-img-top" alt="Photographie du produit">
//           </div>
//               <div class="card-body">
//                   <h5 class="card-title" id="name" value="${selectedProduct.name}">${selectedProduct.name}</h5>
//                       <p class="card-text">${selectedProduct.description}</p>
//                       <p class="card-text">Prix: ${selectedProduct.price}</p>
//                           <div id="quantityLayout" class="mb-3">
//                               <p>Quantité:</p>             
//                                   <button id="subtractBtn" type="button" class="btn-sm btn-dark">-</button>
//                                   <span id="counter"></span>
//                                   <button id="addBtn" type="button" class="btn-sm btn-dark">+</button>
//                           </div>
//                       <label for="color-select" id="color-select" class="mb-4">Couleur</label>
//                           <select name="colorSelection" id="colorSelection">
//                           </select>
//                           <div id="buttonsLayout">
//                               <button class="btn btn-dark" type="button" id="command">Ajouter</button>
//                               <a href="basket.html"><button class="btn btn-dark" type="button">Aller au panier</button></a>
//                           </div>
//                   </div>
//           </section>
//           `;
  
//       myContainer.innerHTML = productCart;
  

//       optionValue = document.getElementById("colorSelection");

//         //Fonction créant les options de couleurs selon les données envoyées par l'API
//         product.colors.forEach(function (choice) {
  
//           const option = document.createElement("option");
//           option.textContent = `${choice}`;
//           option.setAttribute("value", `${choice}`)
//           optionValue.add(option);
//         });
  
//         //Boutons de gestion de la quantité d'un produit.
  
//         let counter = document.getElementById("counter");
//         let subtractBtn = document.getElementById("subtractBtn");
//         let addBtn = document.getElementById("addBtn");
//         let quantity = 1;
  
//         counter.innerHTML = selectedProduct.quantity;

  
  
//         //Gestion de la quantité d'oursons.
  
//         addBtn.addEventListener("click", function(){
  
//           selectedProduct.quantity++;
//           counter.innerHTML = selectedProduct.quantity;
//         })
        
//         subtractBtn.addEventListener("click", function(){
  
//           selectedProduct.quantity--;
//           if (selectedProduct.quantity < 1) {
//             selectedProduct.quantity = 1;
//           }
//           counter.innerHTML = selectedProduct.quantity;
//         })
  
//         //Gestion du localStorage à l'ajout du produit.
  
//         let storageManagement;
  
//         let commandBtn = document.getElementById("command");
//         commandBtn.addEventListener("click", command);
  

//       });
//    }

//   getStorage = function getLocalStorage(){
  
//     return JSON.parse(localStorage.getItem("basketShop")) || [];
//   }

//   function command(){
  
//     storageManagement = getStorage();
    
//       //Vérification si array contient le produit.
//       let existingProduct = storageManagement.find(function(product) {
//         return product.id === selectedProduct.id;
//       })
//       if (existingProduct){
//         existingProduct.quantity = parseInt(counter.innerHTML);
//         existingProduct.price = parseInt(counter.innerHTML) * selectedProduct.price;
//         existingProduct.color = optionValue.value;
//       } 
// }

//--------------------------------------------------------------//


//Gestion du formulaire.


//Prénom
document.getElementById("firstName").addEventListener("blur", firstNameInput);

function firstNameInput(){

  const firstName = document.getElementById("firstName");
  const regex = /^[A-Za-z]{2,25}$/;

  if (!regex.test(firstName.value)) {

    firstName.classList.add("is-invalid");
  }
  else {

    firstName.classList.add("is-valid");
    firstName.classList.remove("is-invalid");
  }
};


//Nom
document.getElementById("name").addEventListener("blur", nameInput);

function nameInput(){

  const name = document.getElementById("name");
  const regex = /^([A-Z]{2,25})$/;

  if (!regex.test(name.value)) {

    name.classList.add("is-invalid");
  }
  else {

    name.classList.add("is-valid");
   name.classList.remove("is-invalid");
  }
};

//Courriel
document.getElementById("mail").addEventListener("blur", mailInput);

function mailInput(){

  const mail = document.getElementById("mail");
  const regex = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,5})$/;

  if (!regex.test(mail.value)) {

    mail.classList.add("is-invalid");
  }
  else {

    mail.classList.add("is-valid");
    mail.classList.remove("is-invalid");
  }
};

//Ville
document.getElementById("ville").addEventListener("blur", cityInput);

function cityInput(){
  const city = document.getElementById("ville");
  const regex = /^[A-Za-z]{2,}$/;

  if (!regex.test(ville.value)) {

    ville.classList.add("is-invalid");
    }
  else {

    city.classList.add("is-valid");
    ville.classList.remove("is-invalid");
  }
};

//Code postal
document.getElementById("zip").addEventListener("blur", zipInput);

function zipInput(){
  const zip = document.getElementById("zip");
  const regex = /^[0-9]{5}$/;

  if (!regex.test(zip.value)) {

    zip.classList.add("is-invalid");
    }
  else {

    zip.classList.add("is-valid");
    zip.classList.remove("is-invalid");
  }
};

//Pays
document.getElementById("pays").addEventListener("blur", paysInput);

function paysInput(){
  const pays = document.getElementById("pays");
  const regex = /^[A-Za-z]{2,15}$/;

  if (!regex.test(pays.value)) {

    pays.classList.add("is-invalid");
    }
  else {

    pays.classList.add("is-valid");
    pays.classList.remove("is-invalid");
  }
};

      //Gestion du lien du btn Valider.

      let validationBtn = document.getElementById("validationBtn");
      let formManagement = document.getElementsByTagName("input").classList;
      // if(formManagement.contains("is-valid")){

      //  console.log('succès');
      // };