/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const buttonCalculate = document.getElementById("submit-btn");
const outputElement = document.getElementById("output");

function converter(e) {
  e.preventDefault();
  const child = document.querySelectorAll("p");
  child.forEach((element) => {
    element.parentNode.removeChild(element);
  });

  const kg = document.getElementById("search").value;
  const lb = kg * 2.2046;
  const g = kg / 0.001;
  const oz = kg * 35.274;

  const lbOutput = document.createElement("p");
  lbOutput.innerText = `${lb.toFixed(3)} lb`;
  const gOutput = document.createElement("p");
  gOutput.innerText = `${g.toFixed(0)} g`;
  const ozOutput = document.createElement("p");
  ozOutput.innerText = `${oz.toFixed(3)} oz`;

  outputElement.append(lbOutput, gOutput, ozOutput);
}

buttonCalculate.addEventListener("click", converter);
