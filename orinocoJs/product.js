

// const queryString_url_id = window.location.search;
// console.log(queryString_url_id);

// const getId = queryString_url_id.slice(1);
// console.log(getId)

// let params = new URL("file:///C:/Users/Jean-Baptiste/Desktop/OC/P5_alignan_jeanbaptiste/product.html?id=${_id}");
// let id = params.get("id");
// console.log(id);
// console.log(params);


// var url = new URL("file:///C:/Users/Jean-Baptiste/Desktop/OC/P5_alignan_jeanbaptiste/product.html?${id}");
// var queryString = url.search;
// console.log(queryString);




const searchUrl = new URL (window.location.href); //Obtention de l'URL du produit consulté.
const searchId = searchUrl.searchParams.get("id"); //Obtention de l'id.


const myContainer = document.getElementById("myContainer");




function teddyDisplay (){
  fetch(`http://localhost:3000/api/teddies/${searchId}`)
    .then(response => response.json())
    .then((data) => {
      
      let productCard = "";
      productCard = 
      `
        <section class="card mb-3">
          <img src="${data.imageUrl}" class="card-img-top" alt="Photographie du produit">
          <div class="card-body">
            <h5 class="card-title">${data.description}</h5>
            <p class="card-text">${data.description}</p>

            <label for="color-select" id="color-select">Couleur</label>
              <select name = "colorSelection" id = "colorSelection">
              
                
              </select>
          </div>
        </section>
      `;

      myContainer.innerHTML = productCard;
      
      data.colors.forEach(function (choice) {

        let x = document.getElementById("colorSelection");
        let option = document.createElement("option");
        option.text = `${choice}`;
        x.add(option);

          });
      
      })

    .catch(error => console.log('error', error));
  };

