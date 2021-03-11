//Buscando o h1 da saudação
const greeting = document.querySelector(".greeting");

//Body
const body = document.querySelector("body");

//Imagem onde ficará a lua ou o sol
const sunOrMoon = document.querySelector(".sunOrMoon");

//stars
const stars1 = document.querySelector(".star1");
const stars2 = document.querySelector(".star2");
const stars3 = document.querySelector(".star3");
const stars4 = document.querySelector(".star4");
const stars5 = document.querySelector(".star5");
const stars6 = document.querySelector(".star6");

//clouds
const cloud1 = document.querySelector(".cloud1");
const cloud2 = document.querySelector(".cloud2");
const cloud3 = document.querySelector(".cloud3");

const stars = [stars1, stars2, stars3, stars4, stars5, stars6];
const clouds = [cloud1, cloud2, cloud3];

const date = new Date(); //Retorna o objeto Date

let hour = date.getHours(); //Retorna a hora atual
let minutes = date.getMinutes(); //Retorna os minutos da hora atual

//DAWN
if (hour >= 0) {
  greeting.innerHTML = "Boa Madrugada";
  body.classList.remove("night");
  body.classList.add("dawn");
  sunOrMoon.src = "/images/moon.png";

  clouds[0].style.display = "none";
  clouds[1].style.display = "none";
  clouds[2].style.display = "none";

  stars[0].style.display = "block";
  stars[1].style.display = "block";
  stars[2].style.display = "block";
  stars[3].style.display = "block";
  stars[4].style.display = "block";
  stars[5].style.display = "block";
}

//MORNING
if (hour >= 5) {
  greeting.innerHTML = "Bom Dia";
  body.classList.remove("dawn");
  body.classList.add("morning");
  sunOrMoon.src = "/images/sun.png";

  clouds[0].style.display = "block";
  clouds[1].style.display = "block";
  clouds[2].style.display = "block";

  stars[0].style.display = "none";
  stars[1].style.display = "none";
  stars[2].style.display = "none";
  stars[3].style.display = "none";
  stars[4].style.display = "none";
  stars[5].style.display = "none";
}

//AFTERNOON
if (hour >= 12) {
  greeting.innerHTML = "Boa Tarde";
  body.classList.remove("morning");
  body.classList.add("night");

  sunOrMoon.src = "/images/sun.png";
  clouds[0].style.display = "block";
  clouds[1].style.display = "block";
  clouds[2].style.display = "block";
}

//NIGHT
if (hour >= 18) {
  greeting.innerHTML = "Boa Noite";
  body.classList.remove("afternoon");
  body.classList.add("night");
  sunOrMoon.src = "/images/moon.png";

  clouds[0].style.display = "none";
  clouds[1].style.display = "none";
  clouds[2].style.display = "none";

  stars[0].style.display = "block";
  stars[1].style.display = "block";
  stars[2].style.display = "block";
  stars[3].style.display = "block";
  stars[4].style.display = "block";
  stars[5].style.display = "block";
}
