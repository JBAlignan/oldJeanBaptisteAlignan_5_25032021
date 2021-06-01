//Pointage vers le conteneur <main> qui contient l'ensemble des cards.
const myContainer = document.getElementById("myContainer");

//Fonction teddiesDisplay; récupération des données de l'API et gestion des cards pour les produits.
    function teddiesDisplay(){
      fetch("http://localhost:3000/api/teddies")  
      .then(response => response.json())
      .then((data) => {
        
        let genericCard = "";
        data.forEach(function(teddy) {
          genericCard +=
            `<article class="col-lg-6">
              <a href="product.html?id=${teddy._id}">
                <div class="card mb-3" style="max-width: 540px;">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${teddy.imageUrl}" alt="${teddy.name}">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">${teddy.name}</h5>
                        <p class="card-text">${teddy.description}</p>
                        <p class="card-text">Prix: ${teddy.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </article> `;
      });                                         //Sortie de la fonction function(teddy).
      

      //Intégration des cards dans le fichier teddy.html via la fonction innerHTML; forEach lis cette ligne de code pour chaque exécution de la fonction function(teddy); on a un nombre de card dans teddy.html égal au nombre de produits présent dans l'API.
          document.getElementById("myContainer").innerHTML = genericCard;

  })  //Sortie de then.
  
  .catch(error => console.log('error', error));

}     //Sortie de la fonction teddiesDisplay


