/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticketFare = 800;
let age = 61;
let student = false;

// if (age < 10) {
//   console.log("Free");
// } else if (age >= 60) {
//   let discountFare = ticketFare - (ticketFare * 15) / 100;
//   console.log("Get 15% Discount", discountFare);
// } else if (student === true) {
//   let discountFare = ticketFare - (ticketFare * 50) / 100;
//   console.log("Get 50% discount", discountFare);
// } else {
//   console.log("Regular ticket fare 800 tk");
// }

// ternary operator:
let msg =
  age < 10
    ? "free"
    : age >= 60
      ? "Get 15% Discount " + (ticketFare - (ticketFare * 15) / 100) 
      : student === true
        ? "Get 50% discount " + (ticketFare - (ticketFare * 50) / 100)
        : "Regular ticket fare 800 tk";
console.log (msg);