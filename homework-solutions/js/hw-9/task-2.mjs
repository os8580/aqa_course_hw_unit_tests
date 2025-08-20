/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  // проверим, что поля есть и правильного типа
  if (typeof character.name === 'string' && typeof character.age === 'number') {
    characters.push(character);
  } else {
    throw new Error('Некорректный объект: нужен name (string) и age (number)');
  }
}

function getCharacter(name) {
  return characters.find((char) => char.name === name);
}

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number') {
    throw new Error('minAge должен быть числом');
  }
  return characters.filter((char) => char.age >= minAge);
}

function updateCharacter(name, newCharacter) {
  let currentCharacter = getCharacter(name);

  if (!currentCharacter) {
    throw new Error(`Персонаж "${name}" не найден`);
  }

  if (typeof newCharacter.name === 'string' && typeof newCharacter.age === 'number') {
    currentCharacter.name = newCharacter.name;
    currentCharacter.age = newCharacter.age;
  } else {
    throw new Error('Некорректный объект: нужен name (string) и age (number)');
  }
}

function removeCharacter(name) {
  const index = characters.findIndex(c => c.name === name);

  if (index === -1) {
    throw new Error(`Персонаж "${name}" не найден`);
  }

  characters.splice(index, 1);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
