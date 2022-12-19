//Gravity of planets

var gravityMercury = 3.7;
var gravityVenus = 8.87;
var gravityEarth = 9.8;
var gravityMars = 3.7;
var gravityJupiter = 24.8;
var gravitySaturn = 10.44;
var gravityUranus = 8.87;
var gravityNeptune = 11.15;

// This arrays save the planet's data for showing up on screen
var infoPlanetScreen = [];
var infoMercury = ["Mercury", "3.7 m/s²", "35.98 million miles", "58d 15h 30m", "url(images/Mercury.jpg)"]
var infoVenus = ["Venus", "8.87 m/s²", "67.24 million miles", "116d 18h 0m", "url(images/Venus.jpg)"]
var infoMars = ["Mars", "3.7 m/s²", "141.6 million miles", "1d 0h 37m", "url(images/Mars.jpg)"]
var infoJupiter = ["Jupiter", "24.8 m/s²", "483.8 million miles", "0d 9h 56m", "url(images/Jupiter.jpg)"]
var infoSaturn = ["Saturn", "10.44 m/s²", "890.8 million miles", "0d 10h 42m", "url(images/Saturn.jpg)"]
var infoUranus = ["Uranus", "24.8 m/s²", "1.784 million miles", "0d 17h 14m", "url(images/Uranus.jpg)"]
var infoNeptune = ["Neptune", "11.15 m/s²", "2.793 million miles", "0d 16h 6m", "url(images/Neptune.jpg)"]

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

  weigthResult = parseInt((weigthEarth * gravity) / gravityEarth);
  result.textContent = "your weigth on " + planet + " is: " + weigthResult + " lb.";
  showResult.appendChild(result);
}

function info() //this function use the created arrays before to show data about planets choosed
{
  information.textContent = "Planet: " + infoPlanetScreen[0] + "\\n" + "Gravity: " + infoPlanetScreen[1] + "\\n" + "Distance from Sun: " + infoPlanetScreen[2] + "\\n" + "Day length: " + infoPlanetScreen[3] + "\\n";
  infoPlanet.appendChild(information);
  information.innerHTML = information.innerHTML.replace(/\\n/g, '<br />');
}

function views() // this function shows pictures of planets choosed on screen
{
  planetView.style.backgroundImage = infoPlanetScreen[4];
}

function traveling()
{
  // this function put's the variables choosed on variables to operate
  //and shows on screen while get active the other functions created before
  switch (planet) {
    case "Mercury":
            weigthResult = weigthMercury;
            gravity = gravityMercury;
            infoPlanetScreen = infoMercury;
            info();
            operation();
            views();
      break;
      case "Venus":
              weigthResult = weigthVenus;
              gravity = gravityVenus;
              infoPlanetScreen = infoVenus;
              info();
              operation();
              views();
      break;
      case "Mars":
              weigthResult = weigthMars;
              gravity = gravityMars;
              infoPlanetScreen = infoMars;
              info();
              operation();
              views();
      break;
      case "Jupiter":
              weigthResult = weigthJupiter;
              gravity = gravityJupiter;
              infoPlanetScreen = infoJupiter;
              info();
              operation();
              views();
      break;
      case "Saturn":
              weigthResult = weigthSaturn;
              gravity = gravitySaturn;
              infoPlanetScreen = infoSaturn;
              info();
              operation();
              views();
      break;
      case "Uranus":
              weigthResult = weigthUranus;
              gravity = gravityUranus;
              infoPlanetScreen = infoUranus;
              info();
              operation();
              views();
      break;
      case "Neptune":
              weigthResult = weigthNeptune;
              gravity = gravityNeptune;
              infoPlanetScreen = infoNeptune;
              info();
              operation();
              views();
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
