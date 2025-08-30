class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value !== 'number') throw new TypeError('salary должен быть числом');
    if (value < 0) throw new RangeError('salary не может быть отрицательной');
    this.#salary = value;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Company {
  #employees;

  constructor(title, phone, address) {
    if (typeof title !== 'string') throw new TypeError('title должен быть строкой');
    if (typeof phone !== 'number') throw new TypeError('phone должен быть числом');
    if (typeof address !== 'string') throw new TypeError('address должен быть строкой');

    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) throw new TypeError('employee должен быть экземпляром Employee');
    this.#employees.push(employee);
  }

  getEmployees() {
    return [...this.#employees];
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}
const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);

company.addEmployee(emp1);
company.addEmployee(emp2);

console.log(company.getEmployees());
console.log(company.getInfo());
console.log(emp1.getFullName());
emp1.salary = 3100;
console.log(emp1.salary);
export { Employee, Company };
