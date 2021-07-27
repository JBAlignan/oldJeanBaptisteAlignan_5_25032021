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

productOrdered.forEach(function(teddiesOrdered){
    
    // let totalPrice = 0;
    // totalPrice += teddiesOrdered.price * teddiesOrdered.quantity;
        function test(totalPrice){
            for (let i = 0; i < productOrdered.length, i++) {
                
            }

        };
    let totalPrice = 0;
    totalPrice += teddiesOrdered.price * teddiesOrdered.quantity;
        // console.log(test);
    console.log(teddiesOrdered);
    console.log(totalPrice);
});

