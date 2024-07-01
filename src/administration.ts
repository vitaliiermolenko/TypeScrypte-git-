// Інтерфейс Employee для опису властивостей співробітника
interface Employee {
    id: number;
    name: string;
    position: string;
}

// Інтерфейс Animal для опису властивостей тварини
interface Animal {
    id: number;
    name: string;
    species: string;
    age: number;
    healthStatus: string;
}

// Клас Administration для управління співробітниками та тваринами
class Administration {
    public employees: Employee[] = [];
    public animals: Animal[] = [];

    // Метод для додавання співробітника
    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    // Метод для видалення співробітника
    removeEmployee(employeeId: number): void {
        this.employees = this.employees.filter(emp => emp.id !== employeeId);
    }

    // Метод для додавання тварини
    addAnimal(animal: Animal): void {
        this.animals.push(animal);
    }

    // Метод для видалення тварини
    removeAnimal(animalId: number): void {
        this.animals = this.animals.filter(animal => animal.id !== animalId);
    }

    // Метод для сповіщення про подію
    notifyEvent(event: string): void {
        console.log(`Administration Notification: ${event}`);
    }
}

// Експорт інтерфейсів Employee та Animal і класу Administration
export { Employee, Animal, Administration };
