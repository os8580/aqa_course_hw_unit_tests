/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  let finalArray = [];
  for (const finalArrayElement of arrays) {
    finalArray.push(...finalArrayElement);
  }
  return finalArray;
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const words = sentence.trim().split(/\s+/);
  let result = '';
  let isFirst = true;

  for (const word of words) {
    if (word.length === 0) continue;

    if (isFirst) {
      result += word[0].toLowerCase() + word.slice(1).toLowerCase();
      isFirst = false;
    } else {
      result += '_' + word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }

  return result;
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n < 0) {
    return "Некорректный ввод. Число должно быть неотрицательным.";
  }
  if (n === 0) {
    return 0;
  }

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

export { mergeArrays, fibonacci, devideBy };
