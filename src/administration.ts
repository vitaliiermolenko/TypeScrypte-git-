import { Observer, Observable } from './observer';

// Інтерфейс IEmployee для опису властивостей співробітника
interface IEmployee {
    id: number;
    name: string;
    position: string;
}

// Інтерфейс IAnimal для опису властивостей тварини
interface IAnimal {
    id: number;
    name: string;
    species: string;
    age: number;
    healthStatus: string;
}

// Клас AdminEmployee реалізує інтерфейс Observer для отримання сповіщень
class AdminEmployee implements Observer {
    constructor(public id: number, public name: string, public position: string) {}

    // Метод для отримання сповіщень
    update(message: string): void {
        console.log(`Notifying Employee ${this.name}: ${message}`);
    }
}

// Клас Administration для управління співробітниками та тваринами, реалізує інтерфейс Observable
class Administration implements Observable {
    public employees: IEmployee[] = [];
    public animals: IAnimal[] = [];
    private observers: Observer[] = [];

    // Метод для додавання співробітника
    addEmployee(employee: IEmployee): void {
        this.employees.push(employee);
    }

    // Метод для видалення співробітника
    removeEmployee(employeeId: number): void {
        this.employees = this.employees.filter(emp => emp.id !== employeeId);
    }

    // Метод для додавання тварини
    addAnimal(animal: IAnimal): void {
        this.animals.push(animal);
    }

    // Метод для видалення тварини
    removeAnimal(animalId: number): void {
        this.animals = this.animals.filter(animal => animal.id !== animalId);
    }

    // Метод для сповіщення про подію
    notifyEvent(event: string): void {
        console.log(`Administration Notification: ${event}`);
        this.notifyObservers(event);
    }

    // Метод для додавання спостерігача
    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    // Метод для видалення спостерігача
    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Метод для сповіщення всіх спостерігачів
    notifyObservers(message: string): void {
        this.observers.forEach(observer => observer.update(message));
    }
}

// Експорт інтерфейсів IEmployee та IAnimal і класу Administration
export { IEmployee, IAnimal, Administration, AdminEmployee };
