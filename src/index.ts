enum NoteType {
    DEFAULT = "Default",
    CONFIRMATION_REQUIRED = "Confirmation Required"
}

class TodoItem {
    private static currentId = 0;
    public readonly id: number;
    public title: string;
    public description: string;
    public creationDate: Date;
    public lastEditDate: Date;
    public isCompleted: boolean;
    public isEditable: boolean;
    public type: NoteType;

    constructor(title: string, description: string, type: NoteType, isEditable: boolean = false) {
        if (!title.trim() || !description.trim()) {
            throw new Error("Title and description cannot be empty.");
        }
        this.id = TodoItem.currentId++;
        this.title = title;
        this.description = description;
        this.creationDate = new Date();
        this.lastEditDate = new Date();
        this.isCompleted = false;
        this.isEditable = isEditable;
        this.type = type;
    }

    // Метод для позначення нотатки як виконаної
    markAsCompleted(): void {
        this.isCompleted = true;
    }

    // Метод для оновлення дати останнього редагування
    updateLastEditDate(): void {
        this.lastEditDate = new Date();
    }
}

class TodoList {
    private items: TodoItem[] = [];

    addItem(title: string, description: string, type: NoteType = NoteType.DEFAULT): TodoItem {
        const newItem = new TodoItem(title, description, type);
        this.items.push(newItem);
        return newItem;
    }

    // Метод для видалення запису за ідентифікатором
    removeItem(id: number): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    // Метод для редагування запису за ідентифікатором
    editItem(id: number, title: string, description: string, type: NoteType): boolean {
        const item = this.items.find(item => item.id === id);
        if (item) {
            if (item.isEditable) {
                item.title = title;
                item.description = description;
                item.type = type; // Оновлення типу нотатки
                item.updateLastEditDate();
                return true;
            } else {
                item.title = title;
                item.description = description;
                item.type = type; // Оновлення типу нотатки
                return true;
            }
        }
        return false;
    }

    // Метод для отримання повної інформації про нотатку за ідентифікатором
    getItemById(id: number): TodoItem | undefined {
        return this.items.find(item => item.id === id);
    }

    // Метод для отримання списку всіх нотаток
    getAllItems(): TodoItem[] {
        return this.items;
    }

    // Метод для позначення нотатки як виконаної
    markItemAsCompleted(id: number): boolean {
        const item = this.getItemById(id);
        if (item) {
            item.markAsCompleted();
            return true;
        }
        return false;
    }

    // Метод для пошуку нотатки за ім'ям або змістом
    searchItem(query: string): TodoItem[] {
        query = query.toLowerCase();
        return this.items.filter(item => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query));
    }

    // Метод для сортування нотаток за статусом (виконано / невиконано)
    sortItemsByStatus(): void {
        this.items.sort((a, b) => {
            if (a.isCompleted && !b.isCompleted) {
                return 1;
            } else if (!a.isCompleted && b.isCompleted) {
                return -1;
            } else {
                return 0;
            }
        });
    }

    // Метод для сортування нотаток за часом створення (від нових до старих)
    sortItemsByCreationTime(): void {
        this.items.sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime());
    }
}

const todoList = new TodoList();

    const item1 = todoList.addItem('First Task', 'Description of the first task', NoteType.DEFAULT);
    const item2 = todoList.addItem('Second Task', 'Description of the second task', NoteType.CONFIRMATION_REQUIRED);

// Позначення одного з записів як виконаний

// Сортування нотаток за статусом
todoList.sortItemsByStatus();
console.log('Sorted by status:', todoList.getAllItems());

// Сортування нотаток за часом створення
todoList.sortItemsByCreationTime();
console.log('Sorted by creation time:', todoList.getAllItems());

// Пошук нотаток за ім'ям або змістом
const searchResult = todoList.searchItem('first');
console.log('Search result:', searchResult);
