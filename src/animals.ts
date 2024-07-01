    // Інтерфейс Animal для опису властивостей тварини
    interface Animal {
        id: number;
        name: string;
        species: string;
        age: number;
        healthStatus: string;
    }

    // Інтерфейс для управління тваринами
    interface IAnimalManagement {
        animals: Animal[];
        addAnimal(animal: Animal): void;
        removeAnimal(animalId: number): void;
        getAnimalById(animalId: number): Animal | undefined;
        getAllAnimals(): Animal[];
    }

    // Клас AnimalManagement для управління тваринами
    class AnimalManagement implements IAnimalManagement {
        public animals: Animal[] = [];

        // Метод для додавання тварини
        addAnimal(animal: Animal): void {
            this.animals.push(animal);
        }

        // Метод для видалення тварини
        removeAnimal(animalId: number): void {
            this.animals = this.animals.filter(animal => animal.id !== animalId);
        }

        // Метод для отримання тварини за її ID
        getAnimalById(animalId: number): Animal | undefined {
            return this.animals.find(animal => animal.id === animalId);
        }

        // Метод для отримання списку всіх тварин
        getAllAnimals(): Animal[] {
            return this.animals;
        }
    }

    // Експорт інтерфейсів Animal та IAnimalManagement і класу AnimalManagement
    export { Animal, IAnimalManagement, AnimalManagement };
