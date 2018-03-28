// Char creation
let name = prompt("What is the name of your character?");
let gender = prompt("What gender is your character?");
let race = prompt("What race is your character? (Human, Elf, Dwarf, Halfling)");
let characterRole = prompt("What class is your character? (Warrior, Ranger, Rogue)");

const mainHero = new Hero(name, 10, gender, race, characterRole);

checkRace(mainHero, mainHero.race);
checkClass(mainHero, mainHero.characterRole);

console.log(
	`${mainHero.name} had been dreaming of adventure for years. Finally, the day had come.
	${mainHero.name} had been accepted to train as one of the ${mainHero.race} king's champions.
	Heart beating furiously in anticipation, ${mainHero.name} entered the palace's training grounds.

	A burly man stood in the center of the grounds surrounded by people that looked just as amazed as ${mainHero.name} felt.
	Feeling that was the right place to be, ${mainHero.name} joined the group.

	"You're late!", the burly man huffed.
	"Go get yourself one of those", he said, nodding toward an weapon rack on the side of the grounds.`
);

mainHero.equippedWeapon({
	name: prompt(`Which weapon do you choose? (Sword, Staff, Dagger, Bow)`),
	minDamage: 1,
	maxDamage: 6
});

console.log(
	`As ${mainHero.name} pulled the ${mainHero.equippedWeapon.name} from the rack, an attendant walked over and proffered some leather armor.
	${mainHero.name} hesitated a moment, then noticed that the rest of the trainees were wearing something similar.
	${mainHero.name} allowed the attendant to assist in donning the armor, then hurried back to the group.`
);

mainHero.equipNewArmor({
	name: `Leather`,
	attackBarrierBonus: 3
});

console.log(
	`They had split into three groups. 
	One sparring; 
	one in a part of the grounds littered with things to hide behind, apparently practicing their sneaking skills;
	and the last group seemed to be haggling with some merchants from the city's market.`
);

const heroParty = [mainHero];

const talrand = new Hero(`Talrand`, 10, `Male`, `Human`, `Warrior`,
	{
		attack: 6,
		sneak: 2,
		persuade: 1
	}, 
	{
		name: `Broadsword`, 
		minDamage: 2,
		maxDamage: 8
	},
	{
		name: `Chain Mail`,
		attackBarrierBonus: 5
	}
);

checkClass(talrand, talrand.characterRole);
checkRace(talrand, talrand.race);

heroParty.push(talrand);

