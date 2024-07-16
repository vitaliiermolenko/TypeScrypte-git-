// Інтерфейс BudgetEntry для опису властивостей статті бюджету
interface BudgetEntry {
    id: number;
    description: string;
    amount: number;
    type: 'income' | 'expense';
}

// Інтерфейс для управління бюджетом
interface IBudgetManagement {
    budgetEntries: BudgetEntry[];
    addEntry(entry: BudgetEntry): void;
    removeEntry(entryId: number): void;
    getEntryById(entryId: number): BudgetEntry | undefined;
    getTotalIncome(): number;
    getTotalExpenses(): number;
    getNetBudget(): number;
}

// Клас BudgetManagement для управління бюджетом
class BudgetManagement implements IBudgetManagement {
    public budgetEntries: BudgetEntry[] = [];

    // Метод для додавання статті бюджету
    addEntry(entry: BudgetEntry): void {
        this.budgetEntries.push(entry);
    }

    // Метод для видалення статті бюджету
    removeEntry(entryId: number): void {
        this.budgetEntries = this.budgetEntries.filter(entry => entry.id !== entryId);
    }

    // Метод для отримання статті бюджету за її ID
    getEntryById(entryId: number): BudgetEntry | undefined {
        return this.budgetEntries.find(entry => entry.id === entryId);
    }

    // Метод для отримання загального доходу
    getTotalIncome(): number {
        return this.budgetEntries
            .filter(entry => entry.type === 'income')
            .reduce((total, entry) => total + entry.amount, 0);
    }

    // Метод для отримання загальних витрат
    getTotalExpenses(): number {
        return this.budgetEntries
            .filter(entry => entry.type === 'expense')
            .reduce((total, entry) => total + entry.amount, 0);
    }

    // Метод для отримання чистого бюджету (дохід - витрати)
    getNetBudget(): number {
        return this.getTotalIncome() - this.getTotalExpenses();
    }
}

// Експорт інтерфейсів BudgetEntry та IBudgetManagement і класу BudgetManagement
export { BudgetEntry, IBudgetManagement, BudgetManagement };
