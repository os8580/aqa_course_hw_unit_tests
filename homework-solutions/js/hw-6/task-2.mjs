/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian']; // Используем myPizzasT1

let resultUnique = [];
let resultNull;

for (let pizza of myPizzas) {
  let found = false;
  for (let compPizza of competitorPizzas) {
    if (pizza.toLowerCase() === compPizza.toLowerCase()) {
      found = true;
      break;
    }
  }
  if (!found) {
    resultUnique.push(pizza);
  }
}

if (resultUnique.length === 0) {
  resultUnique = null;
}

resultNull = null;

export { resultNull, resultUnique };
