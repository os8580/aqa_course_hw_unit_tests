/*
Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
Если значение не найдено, функция должна возвращать undefined.
Используйте keyof для типизации ключей объекта
*/
function getKeyByValue<T extends object>(
  obj: T,
  value: T[keyof T]
): keyof T | undefined {
  return (Object.keys(obj) as (keyof T)[]).find(
    (key) => obj[key] === value
  );
}
