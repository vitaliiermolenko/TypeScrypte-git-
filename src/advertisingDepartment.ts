import { Client } from './zoo';

// Клас AdvertisingDepartment для управління розсилками і промоціями
class AdvertisingDepartment {
    constructor(private clients: Client[]) {}

    // Метод для відправки новинної розсилки клієнтам
    sendNewsletter(content: string): void {
        this.clients.forEach(client => {
            console.log(`Sending newsletter to ${client.name}: ${content}`);
        });
    }

    // Метод для відправки промоційної розсилки клієнтам
    sendPromotions(content: string): void {
        this.clients.forEach(client => {
            console.log(`Sending promotion to ${client.name}: ${content}`);
        });
    }
}

// Експорт класу AdvertisingDepartment
export { AdvertisingDepartment };
