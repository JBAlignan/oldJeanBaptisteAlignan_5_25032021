const myContainer = document.getElementById("myContainer");
let productDisplay = JSON.parse(localStorage.getItem("basketShop"));
let selectedProduct;
let optionValue;
let cartContainer = [""];

//Gestion de l'affichage des produits du panier.
function basketDisplay(){
      
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
    document.location.reload();
  };



//--------------------------------------------------------------//


//Gestion du formulaire.

function validationCommand(event){
  event.preventDefault();
  const data = new FormData(event.target);
  const firstName = data.get('firstName');
  const lastName = data.get('name');
  const city = data.get('ville');
  const email = data.get('mail');
  const address = data.get('pays');
  const contact = new Contact(firstName, lastName, address, city, email);

  console.log(JSON.stringify(contact));
  const products = JSON.parse(localStorage.getItem("basketShop"));
  const order = new Order(contact, products);
  console.log(order);
}

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

      //Gestion du lien du bouton Valider.

      // let validationBtn = document.getElementById("validationBtn");
      let test = document.querySelectorAll("input");
      let testDeux = document.getElementById("validationBtn");

      test.addEventListener("change", function(event) {

      if(event.test.checked){
        testDeux.disabled = false;
      }
    })


      