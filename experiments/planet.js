class Planet
{
    constructor(name, image, gravity, distance, day, box)
    {
        this.name = name; 
        this.image = image; 
        this.gravity = gravity;
        this.distance = distance;
        this.day = day;
        this.box = box;
        this.check = document.getElementById(this.box);
        this.results;  
    }  

    dataPlanet()
    {
        console.log(this.name);
        console.log(this.gravity + " m/s²");
        console.log(this.box);
    }
    info()
    {
        information.textContent = "Planet: " + this.name + "\\n" + "Gravity: " + this.gravity + " m/s²" + "\\n" + "Distance from Sun: " + this.distance + "\\n" + "Day length: " + this.day + "\\n";
        infoPlanet.appendChild(information);
        information.innerHTML = information.innerHTML.replace(/\\n/g, '<br />');

        planetView.style.backgroundImage = this.image;
    }
    operation()
    { 
    // this function makes the numeric operation of user's weigth with planet's gravity choosed and shows the results on screen
    this.results = parseInt((earth.weigth * this.gravity) / earth.gravity);
    result.textContent = "your weigth on " + this.name + " is: " + this.results + " lb.";
    showResult.appendChild(result);
    }
    
}