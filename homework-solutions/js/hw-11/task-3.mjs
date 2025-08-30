class Employee {
  #salary;
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#salary = salary;
  }

  get salary() {
    return this.#salary;
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.programmingLanguages = programmingLanguages;
  }

  addProgrammingLanguage(language) {
    if (typeof language !== 'string' || language.trim() === '') {
      throw new Error('Invalid programming language');
    }
    if (!this.programmingLanguages.includes(language)) {
      this.programmingLanguages.push(language);
    }
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize = 0) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }

  increaseTeamSize() {
    this.teamSize += 1;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.designTools = designTools;
  }

  addDesignTool(tool) {
    if (typeof tool !== 'string' || tool.trim() === '') {
      throw new Error('Invalid design tool');
    }
    if (!this.designTools.includes(tool)) {
      this.designTools.push(tool);
    }
  }
}

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Only instances of Employee can be added');
    }
    const exists = this.employees.some((e) => e.firstName === employee.firstName && e.lastName === employee.lastName);
    if (exists) {
      throw new Error('Employee with the same name already exists');
    }
    this.employees.push(employee);
  }

  getEmployees() {
    return this.employees;
  }

  getEmployeesByProfession(profession) {
    const validProfessions = ['Developer', 'Manager', 'Designer'];
    if (!validProfessions.includes(profession)) {
      return [];
    }
    return this.employees.filter((e) => e.constructor.name === profession);
  }
}

export { Employee, Company, Designer, Developer, Manager };
