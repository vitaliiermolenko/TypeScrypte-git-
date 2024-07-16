import { BudgetEntry, BudgetManagement } from './budget';
import { Employee, EmployeeManagement } from './employees';
import { Animal, AnimalManagement } from './animals';

// Клас AccountingDepartment для управління фінансами
class AccountingDepartment {
    private revenue: number = 0;
    private budgetManagement: BudgetManagement = new BudgetManagement();
    private employeeManagement: EmployeeManagement = new EmployeeManagement();
    private animalManagement: AnimalManagement = new AnimalManagement();

    // Метод для запису виручки
    recordRevenue(amount: number): void {
        this.revenue += amount;
        this.budgetManagement.addEntry({ id: Date.now(), description: "Daily Revenue", amount, type: 'income' });
    }

    // Метод для додавання співробітника
    addEmployee(name: string, salary: number): void {
        const newEmployee: Employee = { id: Date.now(), name, position: 'Employee' };
        this.employeeManagement.addEmployee(newEmployee);
        this.budgetManagement.addEntry({ id: Date.now(), description: `Salary for ${name}`, amount: salary, type: 'expense' });
    }

    // Метод для додавання тварини
    addAnimal(name: string, species: string, cost: number): void {
        const newAnimal: Animal = { id: Date.now(), name, species, age: 0, healthStatus: 'Healthy' };
        this.animalManagement.addAnimal(newAnimal);
        this.budgetManagement.addEntry({ id: Date.now(), description: `Purchase of ${name} the ${species}`, amount: cost, type: 'expense' });
    }

    // Генерація фінансового звіту
    generateFinancialReport(): string {
        return `
            Total Income: ${this.budgetManagement.getTotalIncome()}
            Total Expenses: ${this.budgetManagement.getTotalExpenses()}
            Net Budget: ${this.budgetManagement.getNetBudget()}
        `;
    }
}

// Експорт класу AccountingDepartment
export { AccountingDepartment };
