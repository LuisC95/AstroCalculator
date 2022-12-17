class Planet
{
    constructor(name, image, gravity, distance, day)
    {
        this.name = name; 
        this.image = image; 
        this.gravity = gravity;
        this.distance = distance;
        this.day = day;
    }  

    dataPlanet()
    {
        console.log(this.name);
        console.log(this.gravity);
        console.log(this.distance);
    }
}