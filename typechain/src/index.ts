class Human{
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string){
        this.name = name
        this.age = age
        this.gender = gender
    }
}

const yunseong = new Human("yunseong", 24, "male")

const sayHi = (person: Human): string => {
    return `Hello ${person.name} I 'm ${person.age} years Old. I ' m ${person.gender}`
}

console.log(sayHi(yunseong))