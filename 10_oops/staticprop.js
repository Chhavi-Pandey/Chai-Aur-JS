class theOriginals {
    constructor(vampirename){
        this.vampirename = vampirename;
    }

    logMe(){
        console.log(`Vampire name is ${this.vampirename}`);
        
    }

    static createId(){ // so that every instance of class can't access this
        return `123`;
    }
       
}

const OriginalsMother = new theOriginals("Esther");
console.log(OriginalsMother.createId());
