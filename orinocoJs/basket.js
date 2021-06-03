
const myContainer = document.getElementById("myContainer");


//Gestion de l'affichage des produits du panier.
function basketDisplay(){

  //localStorage vide.
  if (JSON.parse(localStorage.getItem("basketShop")) === null){
   
    let title = document.createElement("h1");
    title.innerText = "Panier Vide";
    myContainer.appendChild(title);
  }
  //localStorage plein.
  else{

    let cartContainer = "";
    let productDisplay = JSON.parse(localStorage.getItem("basketShop"));
    console.log(productDisplay);
    productDisplay.forEach(function(cart){
      console.log(cart);
      const totalPrice = cart.price * cart.quantity;
      cartContainer +=
      `<article id="${cart.id} "class = "col-lg-6">     
        <div class = "card mb-3"style = "max-width: 540px;">             
          <div class = "row g-0">        
            <div class = "col-md-4">        
              <img src="${cart.image}" alt="${cart.name}">             
            </div>
            <div class = "col-md-8">        
              <div class = "card-body">       
                <h5 class = "card-title" >${cart.name}</h5>
                  <p class = "card-text" > Quantité: ${cart.quantity}</p>
                  <p class = "card-text" > Prix: ${totalPrice} &euro;</p>
                  <button id="removeBtn" class="btn btn-primary" type="button">Supprimer</button>
              </div>
            </div>
          </div>
        </div>
       </article>`;
    
    });
  

    //Intégration des carts dans le fichier html.
    
    document.getElementById("myContainer").innerHTML = cartContainer;

    //Bouton remove.
    // let article = document.cartContainer.getElementById(`${cart.id}`);
    // console.log(article);
    let removeBtn = document.getElementById("removeBtn");
    console.log(removeBtn);

    removeBtn.addEventListener("click", function(){

    })
    
  };
};

basketDisplay();
 