/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    return Number(this.budget) > 100000000;
  }
}

const matrica = new Movie("The Matrix", "Wachowski Bros.", 63000000);
const pirates = new Movie(
  "Pirates of the Caribbean: The Curse of the Black Pearl",
  "Gore Verbinski",
  140000000
);

console.log(matrica.wasExpensive());
console.log(pirates.wasExpensive());
