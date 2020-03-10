class Animal {
    private species: string

    constructor(species: string) {
        this.species = species
    }

    getSpecies(): string {
        return this.species
    }
}

class Dog extends Animal {
    constructor() {
        super('Dog')
    }
}

class Cat extends Animal {
    constructor() {
        super('Cat')
    }
}

function speciesForAnimal(animal: Animal): string {
    return animal.getSpecies()
}

const dog = new Dog()
const cat = new Cat()
const animal: Animal = dog
const obj: Object = ""
const thing: unknown = obj

speciesForAnimal(dog)
speciesForAnimal(cat)

function verifyAnimal(maybeAnimal: unknown): maybeAnimal is Animal {
    return maybeAnimal instanceof Animal
}