

//Pointage vers le conteneur <main> qui contient l'ensemble des cards.
const myContainer = document.getElementById("myContainer");

//Création de la fonction teddiesDisplay, qui va générer les cards pour chaque produit.
    function teddiesDisplay(){
      fetch("http://localhost:3000/api/teddies")  //Récupération des données de l'API.
      .then(response => response.json())          //Fonction de retour de la réponse (les données) au forma Json (response.json).
      .then((data) => {                           //Fonction de manipulation des données de l'API (data).
        let genericCard = "";                     //Création du modèle générique des cards (pour l'instant vide).
        data.forEach(function(index) {            //Utilisation de la fonction ForEach sur les données de l'API; Création et mise en argument d'une fonction qui aura pour argument "index" (les différentes entrées du tableau); nesting des fonctions.
          genericCard +=                          //Appel de la variable genericCard, avec ajout du code html type de chaque card par un gabarit (code entre ``); Les placeholders sont occupés par des expressions (${}) indiquant le contenu.
            `<article class="col-lg-6">
              <a href="product.html?id=${index._id}">
                <div class="card mb-3" style="max-width: 540px;">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${index.imageUrl}" alt="${index.name}">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">${index.name}</h5>
                        <p class="card-text">${index.description}</p>
                        <p class="card-text">Prix: ${index.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </article> `;
      });                                         //Sortie de la fonction function(index).

      //Intégration des cards dans le fichier index.html via la fonction innerHTML; forEach lis cette ligne de code pour chaque exécution de la fonction function(index); on a un nombre de card dans index.html égal au nombre de produits présent dans l'API.
          document.getElementById("myContainer").innerHTML = genericCard;
  })  //Sortie de then.
  
  .catch(error => console.log('error', error));

}     //Sortie de la fonction teddiesDisplay