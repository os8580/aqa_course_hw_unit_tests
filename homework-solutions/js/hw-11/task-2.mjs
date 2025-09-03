class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (!/^[A-Za-z]{2,50}$/.test(value)) {
      throw new Error('First name must be 2–50 latin letters');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (!/^[A-Za-z]{2,50}$/.test(value)) {
      throw new Error('Last name must be 2–50 latin letters');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (!/^[A-Za-z ]+$/.test(value) || value.trim().length === 0) {
      throw new Error('Profession must contain only latin letters and spaces');
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0 || value >= 10000) {
      throw new Error('Salary must be a number > 0 and < 10000');
    }
    this.#salary = value;
  }
}

class Company {
  #employees = [];

  constructor(name, phone, address) {
    this.name = name;
    this.phone = phone;
    this.address = address;
  }

  addEmployee(employee) {
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  findEmployeeByName(firstName) {
    const emp = this.#employees.find((e) => e.firstName === firstName);
    if (!emp) {
      throw new Error(`Employee with name "${firstName}" not found`);
    }
    return emp;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((e) => e.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error(`Employee with name "${firstName}" not found`);
    }
    this.#employees.splice(index, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, e) => sum + e.salary, 0);
  }
}

export { Employee, Company };
