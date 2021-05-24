


const myContainer = document.getElementById("myContainer");




function basketDisplay(){

  //localStorage vide.
  
  if (JSON.parse(localStorage.getItem("basketShop")) === null){
   
    let title = document.createElement("h1");
    title.innerText = "Panier Vide";
    myContainer.appendChild(title);
  }
  //Produit(s) dans le localStorage.
  else{
    let productDisplay = [];
    console.log(productDisplay);
    productDisplay.push(JSON.parse(localStorage.getItem("basketShop")));
    productDisplay.forEach(function(product){
      myContainer +=
      `
      < article class = "col-lg-6">     
        <div class = "card mb-3"style = "max-width: 540px;">             
          <div class = "row g-0">        
            <div class = "col-md-4">        
            <img src = "${product.imageUrl}" alt = "${product.name}">             
          </div>
            <div class = "col-md-8">        
              <div class = "card-body">       
                <h5 class = "card-title" >${product.name}</h5>
                  < p class = "card-text" > Prix: ${product.price}</p>
              </div>
            </div>
         </div>
        </div>
      </article>
      `;
    })
  };
};
