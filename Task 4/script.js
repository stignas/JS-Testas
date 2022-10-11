/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "./cars.json";
const outputElement = document.getElementById("output");

async function getCars() {
  const res = await fetch(ENDPOINT);
  const cars = await res.json();
  cars.forEach((element) => {
    generateHTML(element);
  });
}

function generateHTML(car) {
  const brandCard = document.createElement("div");
  brandCard.classList.add("car-card");
  const carBrand = document.createElement("h2");
  carBrand.innerText = car.brand;
  const carModels = document.createElement("p");
  carModels.innerText = `${car.models.toString().split(",").join(", ")}`;

  brandCard.append(carBrand, carModels);
  outputElement.appendChild(brandCard);
}

getCars();
