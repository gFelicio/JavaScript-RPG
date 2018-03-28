class Animal {
	constructor(name, height) {
		this.name = name;
		this.height = height;
	};

	speak() {
		console.log(`${this.name} makes a noise!`)
	}
};

const animal = new Animal(`Gregor`, 5);

class Lion extends Animal {
	constructor(name,height) {
		super(name,height);
		this.species = `Lion`;
	}

	speak() {
		console.log(`${this.name} roars!`);
	}
};

const fuzzy = new Lion(`Fuzzy`, 5);

fuzzy.speak();
animal.speak();
console.log(fuzzy.name);