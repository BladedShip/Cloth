class animal{
    constructor(name,type){
        this.aType=type;
        this.aName=name;
    }

    printAnimal=()=>{
        return "Animal Type: "+this.aType+"\nName: "+this.aName;
    }
}

const eleph = new animal("Sasi","Elephant");
const catat = new animal("Soman","Cat");

console.log(eleph.printAnimal());
console.log(catat.printAnimal());