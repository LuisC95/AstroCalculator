class Astronaut
{
    constructor(weight, selection)
    {
        this.weight = weight;
        this.selection = selection;
    }
    updateWeight(e)
    {
        this.weight = parseInt(e.target.value);

        weigthNumber.textContent = e.target.value + " lb.";
        weigthNumber.appendChild(weigthNumberChooser);
    }
}