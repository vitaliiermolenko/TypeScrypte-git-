import { Visitor, Cashier, TicketType } from './zoo';
import { AdvertisingDepartment } from './advertisingDepartment';
import { AccountingDepartment } from './accountingDepartment';
import { Administration, IEmployee as AdminIEmployee, AdminEmployee } from './administration';
import { Employee, EmployeeManagement } from './employees';
import { Animal, AnimalManagement } from './animals';
import { BudgetEntry, BudgetManagement } from './budget';

// Створення екземпляру Відділу реклами
const advertisingDept = new AdvertisingDepartment();

// Створення екземпляру каси
const cashier = new Cashier(advertisingDept);

// Створення екземплярів відвідувачів
const visitor1 = new Visitor("John Doe", "john@example.com");
const visitor2 = new Visitor("Jane Smith", "jane@example.com");

// Додавання відвідувачів як спостерігачів
cashier.addObserver(visitor1);
cashier.addObserver(visitor2);

// Продаж квитків відвідувачам
cashier.sellTicket(TicketType.ADULT, visitor1);
cashier.sellTicket(TicketType.CHILD, visitor2);

// Сповіщення відвідувачів про закриття
cashier.notifyVisitors("The zoo will close in 15 minutes.");

// Відправка новинної розсилки клієнтам
advertisingDept.sendNewsletter("Welcome to our monthly newsletter!");
// Відправка промоційної розсилки клієнтам
advertisingDept.sendPromotions("Don't miss our summer promotion!");

// Створення екземпляру бухгалтерії
const accountingDept = new AccountingDepartment();

// Запис виручки до бухгалтерії
accountingDept.recordRevenue(cashier.getRevenue());

// Додавання співробітників і тварин
accountingDept.addEmployee("Alice", 5000);
accountingDept.addEmployee("Bob", 4500);
accountingDept.addAnimal("Leo", "Lion", 300);
accountingDept.addAnimal("Ella", "Elephant", 500);

// Генерація фінансового звіту
console.log(accountingDept.generateFinancialReport());

// Створення екземпляру адміністрації
const admin = new Administration();

// Додавання співробітників як спостерігачів
const adminEmployee1 = new AdminEmployee(1, "Alice", "Manager");
const adminEmployee2 = new AdminEmployee(2, "Bob", "Keeper");
admin.addObserver(adminEmployee1);
admin.addObserver(adminEmployee2);

// Додавання та видалення співробітників і тварин
admin.addEmployee({ id: 1, name: "Alice", position: "Manager" } as AdminIEmployee);
admin.addEmployee({ id: 2, name: "Bob", position: "Keeper" } as AdminIEmployee);
admin.removeEmployee(2);
admin.addAnimal({ id: 1, name: "Leo", species: "Lion", age: 5, healthStatus: "Healthy" });
admin.addAnimal({ id: 2, name: "Ella", species: "Elephant", age: 10, healthStatus: "Healthy" });
admin.removeAnimal(1);

// Сповіщення про події
admin.notifyEvent("New promotion: 50% off on all tickets this weekend!");

// Виведення списку співробітників і тварин
console.log("Employees:", admin.employees);
console.log("Animals:", admin.animals);

// Створення екземпляру для управління співробітниками
const employeeManagement = new EmployeeManagement();
employeeManagement.addEmployee({ id: 1, name: "Alice", position: "Manager" });
employeeManagement.addEmployee({ id: 2, name: "Bob", position: "Keeper" });
employeeManagement.removeEmployee(2);
console.log("Employee with ID 1:", employeeManagement.getEmployeeById(1));
console.log("All Employees:", employeeManagement.getAllEmployees());

// Створення екземпляру для управління тваринами
const animalManagement = new AnimalManagement();
animalManagement.addAnimal({ id: 1, name: "Leo", species: "Lion", age: 5, healthStatus: "Healthy" });
animalManagement.addAnimal({ id: 2, name: "Ella", species: "Elephant", age: 10, healthStatus: "Healthy" });
animalManagement.removeAnimal(1);
console.log("Animal with ID 2:", animalManagement.getAnimalById(2));
console.log("All Animals:", animalManagement.getAllAnimals());

// Створення екземпляру для управління бюджетом
const budgetManagement = new BudgetManagement();
budgetManagement.addEntry({ id: 1, description: "Ticket Sales", amount: 200, type: 'income' });
budgetManagement.addEntry({ id: 2, description: "Employee Salaries", amount: 9500, type: 'expense' });
budgetManagement.removeEntry(2);
console.log("Budget Entry with ID 1:", budgetManagement.getEntryById(1));
console.log("Total Income:", budgetManagement.getTotalIncome());
console.log("Total Expenses:", budgetManagement.getTotalExpenses());
console.log("Net Budget:", budgetManagement.getNetBudget());
