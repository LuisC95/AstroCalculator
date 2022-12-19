const mercury = new Planet("Mercury", "url(images/Mercury.jpg)", 3.7, "35.98 million miles", "58d 15h 30m", "mercuryInput");
const venus = new Planet("Venus", "url(images/venus.jpg)", 8.87, "67.24 million miles", "116d 18h 0m", "venusInput");
const mars = new Planet("Mars", "url(images/mars.jpg)", 3.7, "141.6 million miles", "1d 0h 37m", "marsInput");
const jupiter = new Planet("Jupiter", "url(images/jupiter.jpg)", 24.8, "483.8 million miles", "0d 9h 56m", "jupiterInput");
const saturn = new Planet("Saturn", "url(images/saturn.jpg)", 10.44, "890.8 million miles", "0d 10h 42m", "saturnInput");
const uranus = new Planet("Uranus", "url(images/uranus.jpg)", 24.8, "1.784 million miles", "0d 17h 14m", "uranusInput");
const neptune = new Planet("Neptune", "url(images/neptune.jpg)", 11.15, "2.793 million miles", "0d 16h 6m", "neptuneInput");
const earth = new Planet(null, null, 9.8, null, null);



var astronaut = new Astronaut();
var range = new Range();

var numero;
var weightIn = document.querySelector("#earthWeight");
weightIn.addEventListener("input", updateNum);
function updateNum(e)
{
    numero = parseInt(e.target.value);
    astronaut.weight = numero; 
    console.log(astronaut.weight);
}


mercury.dataPlanet();