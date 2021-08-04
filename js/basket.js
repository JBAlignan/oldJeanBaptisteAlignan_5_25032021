const myContainer = document.getElementById("myContainer");
function changeProduct(id){
  window.location.href = `http://localhost:3000/api/teddies/${id}`;
}

//Gestion de l'affichage des produits du panier.
function basketDisplay(){

      let cartContainer = [""];
      let productDisplay = JSON.parse(localStorage.getItem("basketShop"));
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
                    <button id="removeBtn" class="btn btn-dark" value="${element.id}">Supprimer</button>
                    <a onclick="changeProduct('${element.id}')" id="editBtn" class="btn btn-dark" value="">Modifier</a>
                </div>
              </div>
            </div>
          </div>
         </article>`;
      });

      console.log(productDisplay);
  
      //Intégration des produits dans le fichier html.
      
      document.getElementById("productSection").innerHTML = cartContainer;

      //Bouton supprimer

      let removeBtn = document.getElementById("removeBtn").value;
      console.log(removeBtn);
      let test = document.getElementsByTagName("article");
      console.log(test);
      let testDeux = test.id;
      console.log(testDeux);

    };
  
  basketDisplay();



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

      console.log(pays.classList.contains("is-valid"))
      console.log(formManagement)