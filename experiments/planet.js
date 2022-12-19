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
}