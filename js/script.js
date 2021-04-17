
let animalsDiv = document.querySelector("#display-animals");        
let p = document.createElement("P");
let pT = document.createTextNode("There is no animal on list...");
let buttonSubmit = document.querySelector("#form-submit");
let name = document.querySelector("#name");
let race = document.querySelector("#race");
let age = document.querySelector("#age");
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

buttonSubmit.addEventListener("click", (event) => { 
    event.preventDefault();

    let error = validation();

    if(error[0]){
        alert(error[1]);
    } else{
        alert("Animal Agregados coreectamente");   
        let newAnimal = new animal(name.value, race.value, age.value);
        animals.push(newAnimal);

        displayAnimal();
    };

    
});
function validation(){
    let error = [];
    if(name.value.length < 5 || name.value.length > 15){
        error[0] = true;
        error[1] = ("El nombre debe estar entre 5 a 15 caracteres");
        return error;
    };
    if(race.value.length < 5 || race.value.length > 10){
        error[0] = true;
        error[1] = ("La raza debe estar entre 5 a 15 caracteres");
        return error;
    };
    if(age.value.length >= 3){
        error[0] = true;
        error[1] = ("La edad debe estar menor de los 100 años");
        return error;
    }
    for (animalName in animals){
        if(animals[animalName].name == name.value){
            error[0] = true;
            error[1] = "Ese animal ya esta aqui";
            return error;
        };
    };

    error[0] = false;
    return error;
};

function displayAnimal() {
    let number = animals.length;
    number -= 1;

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