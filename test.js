// const cart = [
//     {
//         id:1,
//         price: 10,

// },
// {
//     id:2,
//     price:15,
// }]

// localStorage.setItem("cart", JSON.stringify(cart))

// const cart = JSON.parse (localStorage.getItem("cart"))

// console.log(cart)

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
const objDeux = JSON.stringify(json);

console.log(obj);
console.log(objDeux);


console.log(obj.result);

