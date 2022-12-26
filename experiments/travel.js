class Travel
{
    constructor(travel)
    {
        this.travel = document.getElementById("ready");
    }
    operations()
    {
        /*
        mercury.box.addEventListener("click", checkMercury);
        venus.box.addEventListener("click", checkVenus);
        mars.box.addEventListener ("click", checkMars);
        jupiter.box.addEventListener ("click", checkJupiter);
        saturn.box.addEventListener("click", checkSaturn);
        uranus.box.addEventListener("click", checkUranus);
        neptune.box.addEventListener("click", checkNeptune);
        travel.addEventListener ("click", traveling);
        */
    }
    traveling()
    {
    // this function put's the variables choosed on variables to operate
    //and shows on screen while get active the other functions created before
    switch (planet) 
    {
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