function Animal (name, type, animalSound){
    this.name = name;
    this.type = type;
    this.animalSound = animalSound;

    this.sound = function () {
        alert(name + " makes " + animalSound);
    }
}

function ask() {
    let name = prompt("Enter name of the animal: ");
    let type = prompt("Enter type of the animal: ");
    let animalSound = prompt("Enter sound of the animal: ");
    return {
        name: name,
        type: type,
        animalSound: animalSound
    };
}

let answers = ask();
let Cat = new Animal(answers.name, answers.type, answers.animalSound);
Cat.sound();

answers = ask();
let Dog = new Animal(answers.name, answers.type, answers.animalSound);
Dog.sound();
