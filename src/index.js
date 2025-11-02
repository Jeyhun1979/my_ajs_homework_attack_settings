import { Magician, Daemon } from './js/task';

const mag = new Magician('Gandalf');
mag.attack = 100;
mag.distance = 2;
mag.stoned = true;
console.log(`${mag.name} (Magician):`, mag.attack);

const daemon = new Daemon('Azazel');
daemon.attack = 100;
daemon.distance = 3;
daemon.stoned = false;
console.log(`${daemon.name} (Daemon):`, daemon.attack); 

export { Magician, Daemon };
