
interface Name {
    //option proerties
    outputName?: string;
    readonly name: string;
}

interface Greetable extends Name{   
    greet(phrase: string): void;
}

//Interfaces as function types
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
    return n1 + n2;
}

class Person implements Greetable { 
    age = 30;  
    name: string;

    constructor(n: string){
        this.name = n;
    }
    greet(phrase: string){
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = new Person('Byron');

user1.greet('hey');

console.log(user1);