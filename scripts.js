const mercury = new Planet("Mercury", "url(images/Mercury.jpg)", 3.7, "35.98 million miles", "58d 15h 30m", "mercuryInput");
const venus = new Planet("Venus", "url(images/Venus.jpg)", 8.87, "67.24 million miles", "116d 18h 0m", "venusInput");
const mars = new Planet("Mars", "url(images/Mars.jpg)", 3.7, "141.6 million miles", "1d 0h 37m", "marsInput");
const jupiter = new Planet("Jupiter", "url(images/Jupiter.jpg)", 24.8, "483.8 million miles", "0d 9h 56m", "jupiterInput");
const saturn = new Planet("Saturn", "url(images/Saturn.jpg)", 10.44, "890.8 million miles", "0d 10h 42m", "saturnInput");
const uranus = new Planet("Uranus", "url(images/Uranus.jpg)", 24.8, "1.784 million miles", "0d 17h 14m", "uranusInput");
const neptune = new Planet("Neptune", "url(images/Neptune.jpg)", 11.15, "2.793 million miles", "0d 16h 6m", "neptuneInput");
const earth = new Planet(null, null, 9.8, null, null);


var weigthMercury;
var weigthVenus;
var weigthEarth;
var weigthMars;
var weigthJupiter;
var weigthSaturn;
var weigthUranus;
var weigthNeptune;
var weigthResult;

var planet;
var gravity;

var boxMercury = document.getElementById("mercuryInput");
var boxVenus = document.getElementById("venusInput");
var boxMars = document.getElementById("marsInput");
var boxJupiter = document.getElementById("jupiterInput");
var boxSaturn = document.getElementById("saturnInput");
var boxUranus = document.getElementById("uranusInput");
var boxNeptune = document.getElementById("neptuneInput");
var weigthSelector = document.getElementById("earthWeight");
var weigthNumber = document.getElementById("weigthNumber");
var planetInfo = document.getElementById("resultsAndInfo");
var planetView = document.getElementById("imagePlanet");

var travel = document.getElementById("ready");
var result = document.createElement("div");
var information = document.createElement("div");
var weigthNumberChooser = document.createElement("div");

var astroInput = document.querySelector("#earthWeight");
var showResult = document.getElementById("showResult");
var infoPlanet = document.getElementById("infoPlanet")

mercuryInput.addEventListener("click", checkMercury);
venusInput.addEventListener("click", checkVenus);
marsInput.addEventListener ("click", checkMars);
jupiterInput.addEventListener ("click", checkJupiter);
saturnInput.addEventListener("click", checkSaturn);
uranusInput.addEventListener("click", checkUranus);
neptuneInput.addEventListener("click", checkNeptune);
travel.addEventListener ("click", traveling);

astroInput.addEventListener("input", updateValue);

function updateValue(e) // this function takes the range's value that was choosed by the user
{
  weigthEarth = parseInt(e.target.value);

  weigthNumber.textContent = e.target.value + " lb.";
  weigthNumber.appendChild(weigthNumberChooser);
}

// check's functions was made it to user's can choose only one planet on screen
function checkMercury()
{
  venusInput.checked = false;
  marsInput.checked = false;
  jupiterInput.checked = false;
  saturnInput.checked = false;
  uranusInput.checked = false;
  neptuneInput.checked = false;

  planet = "Mercury";
}
function checkVenus()
{
  mercuryInput.checked = false;
  marsInput.checked = false;
  jupiterInput.checked = false;
  saturnInput.checked = false;
  uranusInput.checked = false;
  neptuneInput.checked = false;

  planet = "Venus";
}
function checkMars()
{
  mercuryInput.checked = false;
  venusInput.checked = false;
  jupiterInput.checked = false;
  saturnInput.checked = false;
  uranusInput.checked = false;
  neptuneInput.checked = false;

  planet = "Mars";
}
function checkJupiter()
{
  mercuryInput.checked = false;
  venusInput.checked = false;
  marsInput.checked = false;
  saturnInput.checked = false;
  uranusInput.checked = false;
  neptuneInput.checked = false;

  planet = "Jupiter";
}
function checkSaturn()
{
  mercuryInput.checked = false;
  venusInput.checked = false;
  marsInput.checked = false;
  jupiterInput.checked = false;
  uranusInput.checked = false;
  neptuneInput.checked = false;

  planet = "Saturn";
}
function checkUranus()
{
  mercuryInput.checked = false;
  venusInput.checked = false;
  marsInput.checked = false;
  jupiterInput.checked = false;
  saturnInput.checked = false;
  neptuneInput.checked = false;

  planet = "Uranus";
}
function checkNeptune()
{
  mercuryInput.checked = false;
  venusInput.checked = false;
  marsInput.checked = false;
  jupiterInput.checked = false;
  saturnInput.checked = false;
  uranusInput.checked = false;

  planet = "Neptune";
}

function operation()
{ 
  // this function makes the numeric operation of user's weigth with planet's gravity choosed and shows the result on screen

  weigthResult = parseInt((weigthEarth * gravity) / earth.gravity);
  result.textContent = "your weigth on " + planet + " is: " + weigthResult + " lb.";
  showResult.appendChild(result);
}


function traveling()
{
  // this function put's the variables choosed on variables to operate
  //and shows on screen while get active the other functions created before
  switch (planet) {
    case "Mercury":
            weigthResult = mercury.weigth;
            gravity = mercury.gravity;
            mercury.info();
            operation();
      break;
      case "Venus":
              weigthResult = venus.weigth;
              gravity = venus.gravity;
              venus.info();
              operation();
      break;
      case "Mars":
              weigthResult = mars.weigth;
              gravity = mars.gravity;
              mars.info();
              operation();
      break;
      case "Jupiter":
              weigthResult = jupiter.weigth;
              gravity = jupiter.gravity;
              jupiter.info();
              operation();
      break;
      case "Saturn":
              weigthResult = saturn.weigth;
              gravity = saturn.gravity;
              saturn.info();
              operation();
      break;
      case "Uranus":
              weigthResult = uranus.weigth;
              gravity = uranus.gravity;
              uranus.info();
              operation();
      break;
      case "Neptune":
              weigthResult = neptune.weigth;
              gravity = neptune.gravity;
              neptune.info();
              operation();
      break;
    default:
    result.textContent = "ERROR you just must choose a planet ";
    document.getElementById('showResult').appendChild(result);
    }
  }

for (let e of document.querySelectorAll('input[type="range"].slider-progress'))
{
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '500' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}
