
class Hero {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.canFly = false;
    this.shield = false;
  }

  attacked(damage) { //echivalent cu attacked = function(damage)
    //daca eroul are proprietatea canFly => 50% sanse sa evite damage-ul
    if (this.canFly) {
      let chance = Math.random();
      if (chance > 0.5) {
        console.log(this.name + " flew away.");
        damage = 0;
      }
    }

    //daca eroul are proprietatea shield => damage-ul este redus cu 20%
    if (this.shield) {
      damage *= 0.8; //damage-ul se scade cu 0.2
      console.log(this.name + " defence with a shield!")
    }
    this.hp -= damage; //hp = hp - damage
    console.log(this.name + " has been attacked. HP reduced by " + damage + ". HP remaining: " + this.hp + ".");
  }
}

class Dwarf extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.shield = true;
  }
  attack(otherHero) { //otherHero este atacat
    let damage = 10;
    console.log(`${this.name} attacked with damage: ${damage}.`); //dmg pe care l-a primit
    otherHero.attacked(damage); //celalat erou ataca
  }
}

class Sprite extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
  }
  attack(otherHero) {
    let damage = 15;
    console.log(`${this.name} attacked with damage: ${damage}.`); //dmg pe care l-a primit
    otherHero.attacked(damage);
  }
}

class Dragon extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
    this.shield = true;
  }
  attack(otherHero) {
    let damage = 5;
    console.log(`${this.name} attacked with damage: ${damage}.`);
    otherHero.attacked(damage);
  }
}

class Fight {
  constructor(hero1, hero2) {
    this.hero1 = hero1;
    this.hero2 = hero2;
    this.turn = 0;
  }
  performAttack() {
    //performAttack se refera la ture
    if (this.turn === 0) {
      this.hero1.attack(this.hero2);
    } else {
      this.hero2.attack(this.hero1);
    }
  }
  changeTurn() {
    this.turn = 1 - this.turn;
  }
  findWiner() {
    if (this.hero1.hp > 0) {
      console.log(this.hero1.name + " win with " + this.hero1.hp + " HP left.");
    } else if (this.hero2.hp > 0) {
      console.log(this.hero2.name + " win with " + this.hero2.hp + " HP left.");
    } else {
      console.log("No hero left alive");
    }
  }

  go = function () {
    do {
      this.performAttack();
      this.changeTurn();
    } while (this.hero1.hp > 0 && this.hero2.hp > 0);
    this.findWiner();
  };

}

//cream obiectele
let dwarf = new Dwarf("Hero Lara", 100);
let sprite = new Sprite("Hero Zelda", 105);
let dragon = new Dragon("Hero Ezio", 110);

let epicFight = new Fight(dwarf, dragon);
epicFight.go();

//-------------------------------------------

let btStartGame = document.querySelector(".bt-start-game");
let showHeros = document.querySelector("#show-heros");
let btFinishGame = document.querySelector(".bt-finish-game");
let winnerHeros = document.querySelector(".winner-hero");


function showHero() {
  showHeros.classList.add("d-flex");
  btFinishGame.classList.add("d-flex");
}

function hideHero() {
  showHeros.classList.remove("d-flex");
  btStartGame.classList.remove("d-block");

  winnerHero();
}

function winnerHero() {
  winnerHeros.classList.add('d-flex');
  let winner = Math.random();
  console.log(winner);
  if (winner < 0.3) {
    console.log("Winner: Hero Zelda!!");
    //(elementul 'div pentru erou').classList.add('.div-erou-1');
    winnerHeros.classList.add("div-hero-zelda");
  } else if (winner < 0.6) {
    console.log("Winner: Hero Ezio!!");
    //(elementul 'div pentru erou').classList.add('.div-erou-2');
    winnerHeros.classList.add("div-hero-ezio");
  } else if (winner < 0.9) {
    console.log("Winner: Hero Lara!!")
    //(elementul 'div pentru erou').classList.add('.div-erou-3');
    winnerHeros.classList.add("div-hero-lara");
  } else {
    console.log("All heroes are dead")
    winnerHeros.classList.add("div-hero-dead");
  }
}
// winnerHero();
//toggle = add/remove



btStartGame.addEventListener("click", showHero); //apar Hero
btFinishGame.addEventListener("click", hideHero); //dispar Hero









