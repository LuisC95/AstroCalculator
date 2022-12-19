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
}