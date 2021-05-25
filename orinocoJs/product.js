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




const searchUrl = new URL(window.location.href); //Obtention de l'URL du produit consulté.
const searchId = searchUrl.searchParams.get("id"); //Obtention de l'id.


const myContainer = document.getElementById("myContainer");




function teddyDisplay() {
  fetch(`http://localhost:3000/api/teddies/${searchId}`)
    .then(response => response.json())
    .then((data) => {

      console.log(data);

      let productCard = "";
      productCard =
        `
        <section class="card mb-3">
          <img src="${data.imageUrl}" id="img" class="card-img-top" alt="Photographie du produit">
          <div class="card-body">
            <h5 class="card-title" id="name" value="${data.name}">${data.name}</h5>
              <p class="card-text">${data.description}</p>
              <p class="card-text">Prix: ${data.price}</p>
              <label for="color-select" id="color-select">Couleur</label>
                <select name = "colorSelection" id = "colorSelection">
                </select>
              <button class="btn btn-primary" type="submit" id="command">Ajouter</button>
              <a href="basket.html"><button class="btn btn-primary" type="submit">Aller au panier</button></a>
          </div>
        </section>
      `;

      myContainer.innerHTML = productCard;

      //Fonction créant les options de couleurs selon les données envoyées par l'API
      data.colors.forEach(function (choice) {

        let optionValue = document.getElementById("colorSelection");
        let option = document.createElement("option");
        option.textContent = `${choice}`;
        option.setAttribute("value", `${choice}`)
        optionValue.add(option);
      });




// //class Store, qui manipule le localStorage.
// class Store {

//   //Vérification du contenu du localStorage et retourne le résultat.
//   static getTeddy() {
//     let teddies;
//     if (localStorage.getItem("basketShop") === null){
//       teddies = [];
//     }
//     else {
//       teddies = JSON.parse(localStorage.getItem("basketShop"));
//     }

//     return teddies;
//   };

//   //Ajout d'un objet au tableau; stringify pour le stockage dans le localStorage; enregistre l'objet modifié dans le localStorage.
//   static addTeddy(teddy) {
//     const teddies = Store.getTeddy();
//     teddies.push(teddy);
//     localStorage.setItem("basketShop", JSON.stringify(teddies));
//   };

//   //Parcours du tableau d'objet; comparaison des id; si match, suppression de la ligne matché; enregistre l'objet modifié dans le localStorage.
//   static removeTeddy (id) {
//     const teddies = Store.getTeddy();
//     teddies.forEach(function (teddy, index){
//      if(teddy._id === id){
//        teddies.splice(index, 1);
//      };
//      localStorage.setItem("basketShop", JSON.stringify(teddies));

//     });
//   }
// };

      
      // Données à récupérer pour le localStorage; cartArray englobe cart.
        let cartArray;
        let cart = {
          name: data.name,
          image: data.imageUrl,
          price: data.price,
          id: data._id
        };

      //Fonction vérifiant le contenu du localStorage.
      function testLocalStorage (){

        if (localStorage.getItem("basketShop") === null){
          cartArray = [];
        }
        else{
          cartArray = JSON.parse(localStorage.getItem("basketShop"));
        };
        return cartArray;        
      };

    //Fonction d'ajout de produit.
      function addProduct (){

        testLocalStorage();
        cartArray.push(cart);    
        localStorage.setItem("basketShop", JSON.stringify(cartArray));       
      };

      //Bouton d'ajout d'un produit.
      let addCart = document.getElementById("command");
      addCart.addEventListener("click", addProduct);


})
    

    .catch(error => console.log('error', error));
};


