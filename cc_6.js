// Employee class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `Employee: ${this.name} | Department: ${this.department}`;
}    
}

// Manager class
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `Manager: ${this.name} | Department: ${this.department} | Team Size: ${this.teamSize}`;
}    
}

// Company class
class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
    }
}

// Create employees and managers
const employee1 = new Employee("Alicia", "Engineering");
const employee2 = new Employee("Bobby", "Marketing");
const manager1 = new Manager("Charlie", "Engineering", 10);
const manager2 = new Manager("David", "Marketing", 8);

const company = new Company();
company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(manager1);
company.addEmployee(manager2);
company.listEmployees();

