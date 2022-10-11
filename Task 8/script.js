/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function (a, b) {
    return a + b;
  };

  this.substraction = function (a, b) {
    return a - b;
  };

  this.multiplication = function (a, b) {
    return a * b;
  };

  this.division = function (a, b) {
    return a / b;
  };
}

const skaiciuotuvas = new Calculator();

console.log(skaiciuotuvas.sum(5, 6));
console.log(skaiciuotuvas.substraction(50, 14));
console.log(skaiciuotuvas.multiplication(6, 7));
console.log(skaiciuotuvas.division(60, 5));
