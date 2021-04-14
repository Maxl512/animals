
let animalsDiv = document.querySelector("#display-animals");        
let p = document.createElement("P");
let pT = document.createTextNode("There is no animal on list...");
p.setAttribute("id", "nonelist");
p.appendChild(pT);
animalsDiv.appendChild(p);


let animals = [];

function none() {
    let animalesInList = animalsDiv.children;
    let numberOfAnimals = animalesInList.length;
    
    if (numberOfAnimals > 1) {
        document.querySelector("#nonelist").style.display = "none";
    } else if (numberOfAnimals <= 1){
        document.querySelector("#nonelist").style.display = "block";
    };
};
class animal {
    constructor(name, race, age){
        this.name = name;
        this.race = race;
        this.age = age;
    };
};

function addAnimal() { 
    let name = document.querySelector("#name").value;
    let race = document.querySelector("#race").value;
    let age = document.querySelector("#age").value;
    
    let newAnimal = new animal(name, race, age);
    animals.push(newAnimal);

    displayAnimal();
};

function displayAnimal() {
    let number = animals.length;
    number -= 1;
    console.log(number);

    let div = document.createElement("DIV");
    div.setAttribute("class", "animal");
    div.setAttribute("id", "animal" + (number + 1));

    let h2 = document.createElement("H2");
    h2.setAttribute("class", "animal__name");

    h2.appendChild(document.createTextNode(animals[number].name));

    let ul = document.createElement("UL");
    ul.setAttribute("class", "animal__description");
    ul.setAttribute("id", "description" + (number + 1));

    let liN = document.createElement("LI");
    liN.appendChild(document.createTextNode("Name: " + animals[number].name));
    liN.setAttribute("id", "name" + (number + 1));

    let liR = document.createElement("LI");
    liR.appendChild(document.createTextNode("Race: " + animals[number].race));

    let liA = document.createElement("LI");
    liA.appendChild(document.createTextNode("Age: " + animals[number].age));

    ul.appendChild(liN);
    ul.appendChild(liR);
    ul.appendChild(liA);

    div.appendChild(h2);
    div.appendChild(ul);
    
    animalsDiv.appendChild(div);

    none();
};