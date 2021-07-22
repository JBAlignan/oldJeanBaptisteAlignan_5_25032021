const myContainer = document.getElementById("myContainer");

//Gestion de l'affichage des produits du panier.
function basketDisplay(){

    //localStorage vide.
    if (JSON.parse(localStorage.getItem("basketShop")) === null){
     
        let basketSection = document.getElementById("productSection");
        let emptyBasket = document.createElement("span");
        emptyBasket.innerText = "Panier Vide";
        basketSection.appendChild(emptyBasket);
    }
    //localStorage plein.
    else{
  
      let cartContainer = [""];
      let productDisplay = JSON.parse(localStorage.getItem("basketShop"));
      let testBasket = [];
      console.log(typeof testBasket);
      console.log(typeof productDisplay);
      productDisplay.forEach(function(cart){
        testBasket.push(cart);
        const totalPrice = cart.price * cart.quantity;
        cartContainer +=
        `<article id="${cart.id}" class = "col-lg-6">     
          <div class = "card mb-3">             
            <div class = "row g-0">        
              <div class = "col-md-4">        
                <img src="${cart.image}" alt="${cart.name}">             
              </div>
              <div class = "col-md-8">        
                <div class = "card-body">       
                  <h5 class = "card-title" >${cart.name}</h5>
                    <p class = "card-text" > Quantité: ${cart.quantity}</p>
                    <p class = "card-text" > Prix: ${totalPrice} &#128</p>
                    <button id="removeBtn" class="btn btn-dark" type="button" value="${cart.id}">Supprimer</button>
                </div>
              </div>
            </div>
          </div>
         </article>`;
      });
  
    
  
      //Intégration des produits dans le fichier html.
      
      document.getElementById("productSection").innerHTML = cartContainer;
  

  
    };
  };
  
  basketDisplay();




//Gestion du formulaire.

//Prénom
document.getElementById("firstName").addEventListener("blur", firstNameInput);

function firstNameInput(){

  const firstName = document.getElementById("firstName");
  const regex = /^[A-Za-z]{2,15}(-)?$/;

  if (!regex.test(firstName.value)) {

    firstName.classList.add("is-invalid");
  }
  else {

    firstName.classList.remove("is-invalid");
  }
};


//Nom
document.getElementById("name").addEventListener("blur", nameInput);

function nameInput(){

  const name = document.getElementById("name");
  const regex = /^([A-Z]{2,15})\-$/;

  if (!regex.test(name.value)) {

    name.classList.add("is-invalid");
  }
  else {

   name.classList.remove("is-invalid");
  }
};

//Courriel
document.getElementById("mail").addEventListener("blur", mailInput);

function mailInput(){

  const mail = document.getElementById("mail");
  const regex = /^[A-Za-z0-9]{2,15}$/;

  if (!regex.test(mail.value)) {

    mail.classList.add("is-invalid");
  }
  else {

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

    pays.classList.remove("is-invalid");
  }
};