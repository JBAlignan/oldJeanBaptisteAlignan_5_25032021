
const myContainer = document.getElementById("myContainer");


//Gestion de l'affichage des produits.
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
      cartContainer +=
      `<article class = "col-lg-6">     
        <div class = "card mb-3"style = "max-width: 540px;">             
          <div class = "row g-0">        
            <div class = "col-md-4">        
              <img src = "${cart.image}" alt = "${cart.name}">             
            </div>
            <div class = "col-md-8">        
              <div class = "card-body">       
                <h5 class = "card-title" >${cart.name}</h5>
                  <p class = "card-text" > Prix: ${cart.price}</p>
              </div>
            </div>
          </div>
        </div>
       </article>`;
    });

    //Intégration des carts dans le fichier html.
    document.getElementById("myContainer").innerHTML = cartContainer;
    
  };
};


