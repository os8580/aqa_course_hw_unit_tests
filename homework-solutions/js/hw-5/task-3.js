/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';

let vowelsQty = 0;
let consonantsQty = 0;

for (let i = 0; i < word.length; i++) {
  let char = word[i].toLowerCase();

  if (vowels.includes(char)) {
    vowelsQty++;
  } else if (consonants.includes(char)) {
    consonantsQty++;
  }
}

vowelsAndConsonantsResult = `${word} contains ${vowelsQty} vowels and ${consonantsQty} consonants`;


export { vowelsAndConsonantsResult };
