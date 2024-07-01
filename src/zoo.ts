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

// Клас Visitor для створення об'єктів відвідувачів
class Visitor {
    constructor(public name: string, public contactInfo: string) {}
}

// Клас Cashier для управління продажем квитків і зберіганням інформації про відвідувачів
class Cashier {
    private currentVisitors: Visitor[] = []; // Список поточних відвідувачів
    private clients: Client[] = []; // Список клієнтів
    private revenue: number = 0; // Виручка

    // Ціни на квитки залежно від їх типу
    private ticketPrices: { [key: string]: number } = {
        adult: 20,
        child: 10,
        family: 50
    };

    // Метод для продажу квитка
    sellTicket(type: string, visitor: Visitor): void {
        const price = this.ticketPrices[type];
        if (price === undefined) {
            throw new Error("Invalid ticket type.");
        }

        this.currentVisitors.push(visitor);
        this.clients.push(visitor as Client);
        this.revenue += price;
    }

    // Метод для сповіщення відвідувачів
    notifyVisitors(message: string): void {
        this.currentVisitors.forEach(visitor => {
            console.log(`Notifying ${visitor.name}: ${message}`);
        });
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

// Експорт інтерфейсу Client і класів Visitor, Ticket, Cashier
export { Client, Visitor, Ticket, Cashier };
