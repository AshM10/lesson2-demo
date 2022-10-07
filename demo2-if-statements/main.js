let backpack = 50;
let headphones = 30;
let jacket = 20;
let coffee = 4;
let vitamins = 5;

let budget = 100;

let cart1 = vitamins + coffee;
let cart2 = backpack + headphones + jacket;
let cart3 = cart1 + cart2;

let cart = cart1;
// let cart = cart2;
// let cart = cart3;

/// GO THROUGH THIS EXAMPLE FIRST
if (cart <= budget) {
  console.log("You're within budget!");
} else {
  console.log("You're over budget!");
}

/// THEN GO FOR THIS ONE TO SHOW IF ELSE STATEMENTS
// if (cart < budget) {
//     console.log(`Your current cart items are worth ${cart1}, which is within budget! We're good!`)
// }
// else if (cart > budget) {
//     let difference = cart - budget;
//     console.log(`This is £${difference} over budget!! Put some things back!`)
// }
// else if (cart == budget) {
//     console.log("All good!")
// }
// else {
//     console.log(`I don't know what's going on!`)
// }
