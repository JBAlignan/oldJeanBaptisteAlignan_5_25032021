let message;
let messageTitle;
let homBtn;

//-------------------------------------------------------------------------

//Encadré du panier vide.

if (productDisplay === null || productDisplay.length === 0){


//Apparence de l'encadré.

message = document.getElementById('productSection');
message.style.background = "#D9F5D3";
message.style.border = "5px solid #8BDD7C";
message.style.margin = "auto";
message.style.width = "45em";
message.style.height = "17em";
message.classList.add("d-flex");
message.classList.add("justify-content-center");
message.classList.add("align-items-center");
message.classList.add("flex-column");
message.classList.remove("container");
message.classList.remove("row");
message.classList.add("col-md-offset-3");
message.classList.add("col-md-6");


//Titre de l'encadré.

messageTitle = document.createElement("h2");
messageTitle.textContent = "Panier vide";
messageTitle.style.marginBottom = "1em";
messageTitle.classList.add("d-flex");
messageTitle.classList.add("justify-content-center");
messageTitle.classList.add("text-center");
message.appendChild(messageTitle);


//Bouton de retour à l'accueil

function clickHome(){
    
    window.location.href = "http://127.0.0.1:5501/index.html";
};
homeBtn = document.createElement("button");
homeBtn.textContent = "Retour à l'accueil";
homeBtn.classList.add("d-flex");
homeBtn.classList.add("justify-content-center");
homeBtn.classList.add("text-center");
homeBtn.classList.add("btn");
homeBtn.classList.add("btn-dark");
homeBtn.setAttribute("onclick", "clickHome()");
message.appendChild(homeBtn);
};