let productOrdered = JSON.parse(localStorage.getItem("basketShop"));

// const map1 = productOrdered.map(productOrdered.price);
// console.log(produ)



console.log(productOrdered);

productOrdered.forEach(function(teddiesOrdered){
    let price = teddiesOrdered.price;
    console.log(price);
});


// let totalPrice = 0;
// let test = 0;

// productOrdered.forEach(function(teddiesOrdered){
    
//     totalPrice += (teddiesOrdered.price * teddiesOrdered.quantity)/productOrdered.length;
//     test += totalPrice;
//     console.log(teddiesOrdered);
// });

// console.log(totalPrice)
// console.log(test);

//-------------------------------------------------------------------------

//Gestion du numéro de commande.

let commandNum = document.getElementById("commandNum");

let stringRandomNum = localStorage.getItem("orderId");

commandNum.innerText = stringRandomNum;

console.log(stringRandomNum)

//localStorage vidé après la commande validée.
localStorage.clear();