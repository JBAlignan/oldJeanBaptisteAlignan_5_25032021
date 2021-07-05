const searchUrl = new URL(window.location.href); // Obtention de l'URL du produit consulté.
const searchId = searchUrl.searchParams.get('id'); // Obtention de l'id du produit.


// Sélection de l'élément <main> dans le DOM.
// Création d'une variable vide de type string.

const myContainer = document.getElementById("myContainer");
let productCart = "";


// Recherche des données de l'ourson consulté via fetch.
// Création et insertion du code html de l'ourson consulté.

fetch(`http://localhost:3000/api/teddies/${searchId}`)
.then(response => response.json())
.then((teddy) => {

    productCart +=
        `
        <section class="card mb-3">
            <img src="${teddy.imageUrl}" id="img" class="card-img-top" alt="Photographie du produit">
            <div class="card-body">
                <h5 class="card-title" id="name" value="${teddy.name}">${teddy.name}</h5>
                    <p class="card-text">${teddy.description}</p>
                    <p class="card-text">Prix: ${teddy.price/100} &euro;</p>
                        <div id="quantityLayout">   
                            <p>Quantité:</p>             
                                <button id="subtractBtn" type="button">-</button>
                                <span id="counter"></span>
                                <button id="addBtn" type="button">+</button>
                        </div>
                    <label for="color-select" id="color-select">Couleur</label>
                        <select name="colorSelection" id="colorSelection">
                        </select>
                        <div id="buttonsLayout">
                            <button class="btn btn-primary" type="button" id="command">Ajouter</button>
                            <a href="basket.html"><button class="btn btn-primary" type="button">Aller au panier</button></a>
                        </div>
                </div>
        </section>
        `;

    myContainer.innerHTML = productCart;

      //Fonction créant les options de couleurs selon les données envoyées par l'API
      teddy.colors.forEach(function (choice) {

        let optionValue = document.getElementById("colorSelection");
        let option = document.createElement("option");
        option.textContent = `${choice}`;
        option.setAttribute("value", `${choice}`)
        optionValue.add(option);
      });    

    }
)
.catch(error => console.log('error', error));

console.log(teddyTest.name)

console.log(teddy.name);
