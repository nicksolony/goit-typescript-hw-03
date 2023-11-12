
class Key {
    private signature: number;
    
    constructor() {
        this.signature = Math.random();
    };

    getSignature(): number {
        return this.signature;
    };
};

class Person {
    constructor(private key:Key) {
        this.key = key;
    };

    getKey(): Key {
        return this.key;
    };
};

abstract class House {

    protected door: boolean;
    protected key: Key;
    private tenants: Person[];

    constructor(key: Key) {
        this.door = false;
        this.key = key;
        this.tenants = [];
    };
    
    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        };
    };
    
    public abstract openDoor(key: Key): void;
};

class MyHouse extends House{

    public openDoor(key:Key) {
        this.door = (key===this.key)
    }
};


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};