/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const buttonElement = document.getElementById("btn");
const outputElement = document.getElementById("output");
const msgElement = document.getElementById("message");

async function getUsers() {
  try {
    const res = await fetch(ENDPOINT);
    if (res.ok) {
      const users = await res.json();
      msgElement.parentNode.removeChild(msgElement);
      users.forEach((user) => {
        showUser(user);
      });
    } else {
      throw new Error("Server error.");
    }
  } catch (error) {
    console.log(error);
  }
}

function showUser(user) {
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");
  const userLogin = document.createElement("p");
  const userAvatar = document.createElement("img");

  userLogin.innerText = user.login.toUpperCase();
  userAvatar.src = `${user.avatar_url}`;

  userCard.append(userLogin, userAvatar);
  outputElement.appendChild(userCard);
}

buttonElement.addEventListener("click", () => {
  getUsers();
});
