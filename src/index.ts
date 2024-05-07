interface Entity {
    name: string;
}

interface Movie extends Entity {
    year: number;
    rating: number;
    awards: string[];
}

interface Category<T extends Entity> extends Entity {
    items: T[];
}

interface Filter<T> {
    type: 'search' | 'range' | 'values';
    filter?: keyof T;
    filterTo?: T[keyof T];
    values?: T[keyof T][];
}

class List<T extends Entity> {
    items: T[];
    filters: Filter<T>[];

    constructor(items: T[], filters: Filter<T>[]) {
        this.items = items;
        this.filters = filters;
    }

    applySearchFilter(filter: Filter<T>) {
        if (filter.type === 'search' && filter.filter) {
            // Implement search logic based on filter.filter
        }
    }

    applyRangeFilter(filter: Filter<T>) {
        if (filter.type === 'range' && filter.filter && filter.filterTo) {
            // Implement range filter logic based on filter.filter and filter.filterTo
        }
    }

    applyValuesFilter(filter: Filter<T>) {
        if (filter.type === 'values' && filter.values) {
            // Implement values filter logic based on filter.values
        }
    }
}