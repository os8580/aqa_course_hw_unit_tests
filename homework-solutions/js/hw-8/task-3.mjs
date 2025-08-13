/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
    const uniqueNumbers = [...new Set(numbers)]; // лишаем входящий массив дубликатов
    const n = uniqueNumbers.length + 1; //определяем N
    const actualSum = uniqueNumbers.reduce((sum, current) => sum + current, 0); //считаем сумму чисел в массиве
    const expectedSum = (n * (n + 1)) / 2; //считаем, какой должна быть сумма чисел от 1 до N.
    return expectedSum - actualSum;


}

export { findMissingNumber };
