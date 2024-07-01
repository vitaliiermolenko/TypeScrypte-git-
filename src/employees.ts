// employees.ts

// Інтерфейс Employee для опису властивостей співробітника
interface Employee {
    id: number;
    name: string;
    position: string;
}

// Інтерфейс для управління співробітниками
interface IEmployeeManagement {
    employees: Employee[];
    addEmployee(employee: Employee): void;
    removeEmployee(employeeId: number): void;
    getEmployeeById(employeeId: number): Employee | undefined;
    getAllEmployees(): Employee[];
}

// Клас EmployeeManagement для управління співробітниками
class EmployeeManagement implements IEmployeeManagement {
    public employees: Employee[] = [];

    // Метод для додавання співробітника
    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    // Метод для видалення співробітника
    removeEmployee(employeeId: number): void {
        this.employees = this.employees.filter(emp => emp.id !== employeeId);
    }

    // Метод для отримання співробітника за його ID
    getEmployeeById(employeeId: number): Employee | undefined {
        return this.employees.find(emp => emp.id === employeeId);
    }

    // Метод для отримання списку всіх співробітників
    getAllEmployees(): Employee[] {
        return this.employees;
    }
}

// Експорт інтерфейсів Employee та IEmployeeManagement і класу EmployeeManagement
export { Employee, IEmployeeManagement, EmployeeManagement };
