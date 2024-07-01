// Імпорт необхідних класів з файлів zoo.ts, advertisingDepartment.ts, accountingDepartment.ts, administration.ts, employees.ts, animals.ts та budget.ts
import { Visitor, Cashier } from './zoo';
import { AdvertisingDepartment } from './advertisingDepartment';
import { AccountingDepartment } from './accountingDepartment.ts'
import { Administration, Employee as AdminEmployee } from './administration';
import { Employee, EmployeeManagement } from './employees';
import { Animal, AnimalManagement } from './animals';
import { BudgetEntry, BudgetManagement } from './budget';   

// Створення екземпляру каси
const cashier = new Cashier();

// Створення екземплярів відвідувачів
const visitor1 = new Visitor("John Doe", "john@example.com");
const visitor2 = new Visitor("Jane Smith", "jane@example.com");

// Продаж квитків відвідувачам
cashier.sellTicket("adult", visitor1);
cashier.sellTicket("child", visitor2);

// Виведення списку поточних відвідувачів
console.log("Current Visitors:", cashier.getCurrentVisitors());
// Виведення списку клієнтів
console.log("Clients:", cashier.getClients());
// Виведення виручки
console.log("Revenue:", cashier.getRevenue());

// Сповіщення відвідувачів
cashier.notifyVisitors("The zoo will close in 15 minutes.");

// Створення екземпляру Відділу реклами з поточними клієнтами
const advertisingDept = new AdvertisingDepartment(cashier.getClients());

// Відправка новинної розсилки клієнтам
advertisingDept.sendNewsletter("Welcome to our monthly newsletter!");
// Відправка промоційної розсилки клієнтам
advertisingDept.sendPromotions("Don't miss our summer promotion!");

// Створення екземпляру бухгалтерії
const accountingDept = new AccountingDepartment();

// Запис виручки до бухгалтерії
accountingDept.recordRevenue(cashier.getRevenue());

// Додавання співробітників
accountingDept.addEmployee("Alice", 5000);
accountingDept.addEmployee("Bob", 4500);

// Додавання тварин
accountingDept.addAnimal("Leo", "Lion", 300);
accountingDept.addAnimal("Ella", "Elephant", 500);

// Генерація фінансового звіту
console.log(accountingDept.generateFinancialReport());

// Створення екземпляру адміністрації
const admin = new Administration();

// Додавання співробітників через адміністрацію
admin.addEmployee({ id: 1, name: "Alice", position: "Manager" });
admin.addEmployee({ id: 2, name: "Bob", position: "Keeper" });

// Видалення співробітника
admin.removeEmployee(2);

// Додавання тварин через адміністрацію
admin.addAnimal({ id: 1, name: "Leo", species: "Lion", age: 5, healthStatus: "Healthy" });
admin.addAnimal({ id: 2, name: "Ella", species: "Elephant", age: 10, healthStatus: "Healthy" });

// Видалення тварини
admin.removeAnimal(1);

// Сповіщення про подію
admin.notifyEvent("New promotion: 50% off on all tickets this weekend!");

// Виведення списку співробітників
console.log("Employees:", admin.employees);

// Виведення списку тварин
console.log("Animals:", admin.animals);

// Створення екземпляру для управління співробітниками
const employeeManagement = new EmployeeManagement();

// Додавання співробітників через управління співробітниками
employeeManagement.addEmployee({ id: 1, name: "Alice", position: "Manager" });
employeeManagement.addEmployee({ id: 2, name: "Bob", position: "Keeper" });

// Видалення співробітника
employeeManagement.removeEmployee(2);

// Отримання співробітника за ID
console.log("Employee with ID 1:", employeeManagement.getEmployeeById(1));

// Виведення списку всіх співробітників
console.log("All Employees:", employeeManagement.getAllEmployees());

// Створення екземпляру для управління тваринами
const animalManagement = new AnimalManagement();

// Додавання тварин через управління тваринами
animalManagement.addAnimal({ id: 1, name: "Leo", species: "Lion", age: 5, healthStatus: "Healthy" });
animalManagement.addAnimal({ id: 2, name: "Ella", species: "Elephant", age: 10, healthStatus: "Healthy" });

// Видалення тварини
animalManagement.removeAnimal(1);

// Отримання тварини за ID
console.log("Animal with ID 2:", animalManagement.getAnimalById(2));

// Виведення списку всіх тварин
console.log("All Animals:", animalManagement.getAllAnimals());

// Створення екземпляру для управління бюджетом
const budgetManagement = new BudgetManagement();

// Додавання статей бюджету
budgetManagement.addEntry({ id: 1, description: "Ticket Sales", amount: 200, type: 'income' });
budgetManagement.addEntry({ id: 2, description: "Employee Salaries", amount: 9500, type: 'expense' });

// Видалення статті бюджету
budgetManagement.removeEntry(2);

// Отримання статті бюджету за ID
console.log("Budget Entry with ID 1:", budgetManagement.getEntryById(1));

// Виведення загального доходу
console.log("Total Income:", budgetManagement.getTotalIncome());

// Виведення загальних витрат
console.log("Total Expenses:", budgetManagement.getTotalExpenses());

// Виведення чистого бюджету
console.log("Net Budget:", budgetManagement.getNetBudget());
