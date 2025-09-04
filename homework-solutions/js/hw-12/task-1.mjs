/*
1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
*/
function delayTwoSeconds(callback) {
  setTimeout(callback, 2000); // 2000 мс = 2 секунды
}

/*
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль
  */
const promiseTwo = new Promise((resolve) => {
  resolve(1);
});
promiseTwo.then((result) => console.log(result));
/*
  3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль
  */
const promiseThree = new Promise((resolve, reject) => {
  reject('Promise failed');
});
promiseThree
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
/*
  4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
  */
function promiseNumber(num) {
  return new Promise((resolve) => {
    resolve(num);
  });
}
/*
  5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
  */
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result) => console.log(result));
});
/*
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
  */
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result) => {
    console.log(`status: ${result.status}, value: ${result.value}`);
  });
});
/*
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
*/
async function asyncFunction() {
  try {
    const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((result) => console.log(result));

    const settledResults = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    settledResults.forEach((result) => {
      console.log(`status: ${result.status}, value: ${result.value}`);
    });
  } catch (error) {
    console.error(error);
  }
}
