// Beings
function SupernaturalBeing(name, alterEgoName, hp, age, superPower, favPhrase) {
    this.name = name;
    this.alterEgoName = alterEgoName;
    this.hp = hp;
    this.age = age;
    this.superPower = superPower;
    this.favPhrase = favPhrase;
    this.attacks = new Map();
    this.status = "free and alive";
}

// add attacks to beings
SupernaturalBeing.prototype.addAttack = function(attackName, dmg) {
    this.attacks.set(attackName, dmg);
}

// add shout FavPhrase function to beings
SupernaturalBeing.prototype.shoutFavPhrase = function() {
    console.log(this.name + ": '" + this.favPhrase + "'");
}

// split beings into SuperHeros and Villains
function SuperHero(name, alterEgoName, hp, age, superPower, favPhrase) {
    SupernaturalBeing.call(this, name, alterEgoName, hp, age, superPower, favPhrase);
}

function Villain(name, alterEgoName, hp, age, superPower, favPhrase) {
    SupernaturalBeing.call(this, name, alterEgoName, hp, age, superPower, favPhrase);
}

SuperHero.prototype = Object.create(SupernaturalBeing.prototype);
Villain.prototype = Object.create(SupernaturalBeing.prototype);


// Define Attack behaviour
SuperHero.prototype.attack = function (villain, attackName) {
    let dmgDealt = this.attacks.get(attackName);
    villain.hp -= dmgDealt;

    console.log(this.name + " used " + attackName + " and dealt " + dmgDealt + " damage to " + villain.name + ". " + villain.name + " has " + villain.hp + "HP left.");
    if (villain.hp <= 0) {
        console.log(villain.name + " has been defeated and sent to jail.");
        villain.status = "arrested";
    }
}

Villain.prototype.attack = function (superHero, attackName) {
    let dmgDealt = this.attacks.get(attackName);
    superHero.hp -= dmgDealt;

    console.log(this.name + " used " + attackName + " and dealt " + dmgDealt + " damage to " + superHero.name + ". " + superHero.name + " has " + superHero.hp + "HP left.");
    if (superHero.hp <= 0) {
        console.log(superHero.name + " has been slain.");
        superHero.status = "dead";
    }
}

// define an example hero and villain
Deku = new SuperHero("Deku", "Izuku Midoriya", 100, 16, "One for All", "It's fine now. Why? Because I am here!");
Deku.addAttack("Delaware Smash", 10);
Deku.addAttack("One for All Full Cowl", 20);

Overhaul = new Villain("Overhaul", "Kai Chisaki", 200, 20, "Overhaul", "When someone lays a finger on me, I can't help but feed the need to cleanse myself!");
Overhaul.addAttack("Disassemble Ground", 10);
Overhaul.addAttack("Disassemble Person", 30);

// Fight
Deku.shoutFavPhrase();
Overhaul.shoutFavPhrase();
console.log("The Fight started!");
