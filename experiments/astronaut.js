class Astronaut extends planet
{
    constructor(weight, selection, planetWeight, gravityEarth , gravity)
    {
        super(gravity)
        this.weight = weight;
        this.selection = selection;
        this.planetWeight = planetWeight;
        this.gravityEarth = earth.gravity;
        this.strartTravel = document.getElementById("ready");
    }
    start()
    {
        this.strartTravel.addEventListener("click", travelMode);
        function travelMode()
        {
        // this function put's the variables choosed on variables to operate
        //and shows on screen while get active the other functions created before
        switch (planet) {
            case "Mercury":
                    weigthResult = mercury.weigth;
                    gravity = mercury.gravity;
                    mercury.info();
                    mercury.operation();
            break;
            case "Venus":
                    weigthResult = venus.weigth;
                    gravity = venus.gravity;
                    venus.info();
                    venus.operation();
            break;
            case "Mars":
                    weigthResult = mars.weigth;
                    gravity = mars.gravity;
                    mars.info();
                    mars.operation();
            break;
            case "Jupiter":
                    weigthResult = jupiter.weigth;
                    gravity = jupiter.gravity;
                    jupiter.info();
                    jupiter.operation();
            break;
            case "Saturn":
                    weigthResult = saturn.weigth;
                    gravity = saturn.gravity;
                    saturn.info();
                    saturn.operation();
            break;
            case "Uranus":
                    weigthResult = uranus.weigth;
                    gravity = uranus.gravity;
                    uranus.info();
                    uranus.operation();
            break;
            case "Neptune":
                    weigthResult = neptune.weigth;
                    gravity = neptune.gravity;
                    neptune.info();
                    neptune.operation();
            break;
            default:
            result.textContent = "ERROR you just must choose a planet ";
            document.getElementById('showResult').appendChild(result);
            }
        }
    }
}