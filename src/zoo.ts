import { Observer, Observable } from './observer';
import { AdvertisingDepartment } from './advertisingDepartment';

// Інтерфейс Visitor, що описує основні властивості відвідувача
interface Visitor {
    name: string;
    contactInfo: string;
}

// Інтерфейс Client, що наслідує властивості від Visitor
interface Client extends Visitor {}

// Клас Ticket для представлення квитка
class Ticket {
    constructor(public type: string, public price: number) {}
}

// Enum для типів квитків
enum TicketType {
    ADULT = 'adult',
    CHILD = 'child',
    FAMILY = 'family'
}

// Клас Visitor для створення об'єктів відвідувачів, реалізує інтерфейс Observer
class Visitor implements Observer {
    constructor(public name: string, public contactInfo: string) {}

    // Метод для отримання сповіщень
    update(message: string): void {
        console.log(`Notifying ${this.name}: ${message}`);
    }
}

// Клас Cashier для управління продажем квитків і зберіганням інформації про відвідувачів, реалізує інтерфейс Observable
class Cashier implements Observable {
    private currentVisitors: Visitor[] = []; // Список поточних відвідувачів
    private clients: Client[] = []; // Список клієнтів
    private revenue: number = 0; // Виручка
    private observers: Observer[] = []; // Список спостерігачів

    // Ціни на квитки залежно від їх типу
    private ticketPrices: { [key in TicketType]: number } = {
        [TicketType.ADULT]: 20,
        [TicketType.CHILD]: 10,
        [TicketType.FAMILY]: 50
    };

    constructor(private advertisingDepartment: AdvertisingDepartment) {}

    // Метод для продажу квитка
    sellTicket(type: TicketType, visitor: Visitor): void {
        const price = this.ticketPrices[type];
        if (price === undefined) {
            throw new Error("Invalid ticket type.");
        }

        this.currentVisitors.push(visitor);
        this.clients.push(visitor as Client);
        this.revenue += price;

        // Notify the Advertising Department about the new client
        this.advertisingDepartment.addClient(visitor as Client);
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

    // Метод для сповіщення відвідувачів
    notifyVisitors(message: string): void {
        this.notifyObservers(message);
    }

    // Метод для отримання виручки
    getRevenue(): number {
        return this.revenue;
    }

    // Метод для отримання списку поточних відвідувачів
    getCurrentVisitors(): Visitor[] {
        return this.currentVisitors;
    }

    // Метод для отримання списку клієнтів
    getClients(): Client[] {
        return this.clients;
    }
}

// Експорт інтерфейсу Client і класів Visitor, Ticket, Cashier, TicketType
export { Client, Visitor, Ticket, Cashier, TicketType };
