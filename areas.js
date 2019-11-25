const readlineSync = require("readline-sync");

let shape = diamond

let radius = 0
let length = 0
let width = 0
let side = 0
let base = 0
let height = 0

while(shape !== "circle" || shape !== "rectangle" || shape !== "square" || shape !== "triangle" || !Number.isNaN(shape)){
  shape = String(readlineSync.question("Enter a shape: "));
    if(shape === "circle" || shape === "Circle"){
  radius = Number(readlineSync.question("Enter a radius "));
  let circlearea = (3.14 * Math.squared(radius)).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
  console.log("\nArea: " + circlearea)
}else if (shape === "rectangle" || shape === "Rectangle"){
length = Number(readlineSync.question("Enter a length: "));
width = Number(readlineSync.question("Enter a width: "));
let reactanglearea = (length * width).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nArea: " + reactanglearea)
}else if (shape === "square" || shape === "Square"){
  side = Number(readlineSync.question("Enter a side: "));
  let squarearea =  (side * side).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
  console.log("\nArea: " + sqaurearea)
}else if (shape === "triangle" || shape === "Triangle"){
base = Number(readlineSync.question("Enter a base: "));
height = Number(readlineSync.question("Enter a height: "));
let trianglearea = ((base * height)/2).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nArea: " + trianglearea)
}

}
