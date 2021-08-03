let productOrdered = JSON.parse(localStorage.getItem("basketShop"));



console.log(productOrdered);

console.log(typeof productOrdered);

console.log(productOrdered[0].name);

// productOrdered.forEach(function(teddiesOrdered){
//     let price = teddiesOrdered.price;
//     let quantity = teddiesOrdered.quantity;
//     let totalPrice = price * quantity;
//     console.log(price);
//     console.log(quantity);
//     console.log(totalPrice);
// });


let totalPrice = 0;
let test = 0;

productOrdered.forEach(function(teddiesOrdered){
    
    
    totalPrice += (teddiesOrdered.price * teddiesOrdered.quantity)/productOrdered.length;
    test += totalPrice;

    console.log(teddiesOrdered);
    console.log(typeof totalPrice);
    console.log(totalPrice += totalPrice);
});

console.log(totalPrice)
console.log(test);







//Gestion du numéro de commande.
let commandNum = document.getElementById("commandNum");

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min) + min)
};

let stringRandomNum = getRandomNum(1000, 2000).toString();

commandNum.innerText = stringRandomNum;

console.log(stringRandomNum)
