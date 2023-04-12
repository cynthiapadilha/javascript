class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;


    constructor (name){
        this.name = name;
    }

    get life(){
        return this._life;
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 :newLife;
    }
}

class Knigth extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character{
    constructor (name){
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}
