const searchUrl = new URL (window.location.href); //Obtention de l'URL du produit consulté.
const searchId = searchUrl.searchParams.get("id"); //Obtention de l'id.


const myContainer = document.getElementById("myContainer");
let productArray = [];
let productStoraged = JSON.parse(localStorage.getItem("teddies"));
productArray.push(productStoraged);

function basketDisplay(){

  if (localStorage.getItem("teddies") === null){
   
    let title = document.createElement("h1");
    title.innerText = "Panier Vide";
    myContainer.appendChild(title);
  }
  else{
    localStorage.getItem
    productArray.forEach(function(teddy){
      myContainer +=
      `
      < article class = "col-lg-6">     
        <div class = "card mb-3"style = "max-width: 540px;">             
          <div class = "row g-0">        
            <div class = "col-md-4">        
            <img src = "${teddy.imageUrl}" alt = "${teddy.name}">             
          </div>
            <div class = "col-md-8">        
              <div class = "card-body">       
                <h5 class = "card-title" >${teddy.name}</h5>
                  <p class = "card-text" >${teddy.description}</p>
                  < p class = "card-text" > Prix: ${teddy.price}</p>
              </div>
            </div>
         </div>
        </div>
      </article>
      `;
    })
  };
};
