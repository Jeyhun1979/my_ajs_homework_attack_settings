import { Magician, Daemon } from '../js/task';

describe('Attack calculation', () => {
  test.each([
    ['Magician no stoned, distance 1', new Magician('M1'), 100, 1, false, 100],
    ['Magician no stoned, distance 2', new Magician('M2'), 100, 2, false, 90],
    ['Magician no stoned, distance 3', new Magician('M3'), 100, 3, false, 80],
    ['Magician stoned, distance 2', new Magician('M4'), 100, 2, true, 85],
    ['Daemon stoned, distance 3', new Daemon('D1'), 100, 3, true, 72],
  ])('%s', (_, character, baseAttack, distance, stoned, expected) => {
    character.attack = baseAttack;
    character.distance = distance;
    character.stoned = stoned;
    expect(character.attack).toBe(expected);
  });
});

describe('Getters and setters', () => {
  test('stoned setter/getter', () => {
    const mag = new Magician('Merlin');
    mag.stoned = true;
    expect(mag.stoned).toBe(true);
  });

  test('attack setter/getter', () => {
    const mag = new Magician('Merlin');
    mag.attack = 120;
    expect(mag._attack).toBe(120);
  });

  test('attack never negative', () => {
    const mag = new Magician('Merlin');
    mag.attack = 10;
    mag.distance = 10;
    mag.stoned = true;
    expect(mag.attack).toBe(0);
  });
});
