/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  // 1. Проверяем, что на вход пришла строка.
  if (typeof word !== 'string') {
    return false;
  }

  // 2. Приводим всё к нижнему регистру и убираем пробелы, используя for...of.
  let processedWord = '';
  for (const char of word) {
    const lowerChar = char.toLowerCase();
    if (lowerChar !== ' ') {
      processedWord += lowerChar;
    }
  }

  // 3. Сравниваем символы с двух концов строки.
  const len = processedWord.length;
  for (let i = 0; i < len / 2; i++) {
    if (processedWord[i] !== processedWord[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  // Проверяем, что на вход пришла строка и она не пустая
  if (typeof sentence !== 'string' || sentence.length === 0) {
    return [];
  }

  const words = sentence.split(' ');
  let longestWords = [];
  let maxLength = 0;

  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWords = [word];
    } else if (word.length === maxLength) {
      longestWords.push(word);
    }
  }

  return longestWords;
}

export { isPalindrom, findLongestWords };
