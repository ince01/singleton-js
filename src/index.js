const B = require("./B");
const C = require("./C");
const A = require("./A");

function main() {
  B();
  C();
  console.log(A);
}

main();

module.exports = main;
