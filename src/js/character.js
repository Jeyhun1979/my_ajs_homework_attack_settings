export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this._attack = 0;
    this._stoned = false;
    this.distance = 1;
  }

  get attack() {
    let attackPower = this._attack * (1 - (this.distance - 1) / 10);
    if (this._stoned) {
      attackPower -= Math.log2(this.distance) * 5;
    }
    return attackPower > 0 ? Math.round(attackPower) : 0;
  }

  set attack(value) {
    this._attack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }
}
