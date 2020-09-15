//Class practice

class Animal{
    numLegs: number;
    diet: string;
    habitat: string;
    name: string;
    protected sound: string;

    constructor(numLegs: number, diet: string, habitat: string, name: string, sound: string){
        this.numLegs = numLegs;
        this.diet = diet;
        this.habitat = habitat;
        this.name = name;
        this.sound = sound;
    }
   
    makeSound(){
        console.log(`${this.name} says ${this.sound}`);
    }
}

class Cat extends Animal{
    hasFur: boolean;
    isDomesticated: boolean;
    constructor(habitat: string, sound: string, hasFur: boolean, isDomesticated: boolean){
        super(4, "carnivore", habitat, "cat", sound);
        this.hasFur = hasFur;
        this.isDomesticated = isDomesticated;
    }
}
let tiger = new Cat("jungle", "roar", true, false);

class WildCat extends Cat{
    isSolitaryHunter: boolean;
    size: string;
    constructor(habitat: string, isSolitaryHunter: boolean, size: string){
        super(habitat, "roar", true, false);
        this.isSolitaryHunter = isSolitaryHunter;
        this.size = size;
    }
}
let wildCat = new WildCat("desert", true, "large")

class DomesticatedCat extends Cat{
    breed: string;
    eyeColor: string;
    constructor(hasFur:boolean, breed: string, eyeColor: string){
        super("urban", "meow", hasFur, true);
        this.breed = breed;
        this.eyeColor = eyeColor;
    }
}

class Snake extends Animal{
    isPosionous: boolean;
    howLong: number;
    constructor(habitat: string, isPosionous: boolean, howLong: number){
        super(0, "carnivore", habitat, "snake", "hiss");
        this.isPosionous = isPosionous;
        this.howLong = howLong;
    }
}
let boa = new Snake("jungle", false, 15);

class VenomousSnake extends Snake{
    venomType: string;
    headShape: string;
    constructor(habitat: string, howLong: number, venomType: string, headShape: string){
        super(habitat, true, howLong);
        this.venomType = venomType;
        this.headShape = headShape;
    }
}


class NonVenomousSnake extends Snake{
    canConstrict: boolean;
    friendly: boolean;
    constructor(habitat: string, howLong: number, canConstrict: boolean, friendly: boolean){
        super(habitat, false, howLong);
        this.canConstrict = canConstrict;
        this.friendly = friendly;
    }
}




//Object Interface Practice

interface Person{
    firstName: string;
    lastName: string;
    age: number;
    hobbies: Array<Hobby>;
}

interface Hobby{
    name: string,
    years: number,
}

let me: Person = {
    firstName: "Amanda",
    lastName: "Hilliard",
    age: 33, 
    hobbies: [{name: "Video Games", years: 25}]
}


//ES6 Basics practice

let arr1 = [1,10,5];
let arr2 = [6,2,8];
let combinedArray = [...arr1, ...arr2];
let shallowCopy = [...combinedArray];


shallowCopy.sort((a: number,b: number): number => a-b);

console.log(combinedArray);
console.log(shallowCopy);