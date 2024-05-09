interface Movie {
    title: string;
    year: number;
    rating: number;
    awards: string[];
}

interface Category {
    name: string;
    movies: Movie[];
}

// Базовий клас для фільтрів
class Filter {
    constructor(
        public filterType: string,
        public filter?: string | number, 
        public filterTo?: string | number, 
        public values?: string[] 
    ) {}
}

// Клас для фільтрації за пошуком
class SearchFilter extends Filter {
    constructor(public filter: string) {
        super('search');
    }
}

// Клас для фільтрації за діапазоном значень
class RangeFilter extends Filter {
    constructor(public filter: string, public filterTo: number) {
        super('range', undefined, filterTo);
    }
}

// Клас для фільтрації за вибраними значеннями
class ValuesFilter extends Filter {
    constructor(public values: string[]) {
        super('values', undefined, undefined, values);
    }
}

// Клас для списку фільмів
class MovieList {
    movies: Movie[];
    filters: Filter[];

    constructor(movies: Movie[], filters: Filter[]) {
        this.movies = movies;
        this.filters = filters;
    }

    // Метод застосовує фільтр за пошуком до списку фільмів
    applySearchValue(searchFilter: SearchFilter) {
        this.movies = this.movies.filter(movie => movie.title.toLowerCase().includes(searchFilter.filter.toLowerCase()));
    }

    // Метод застосовує фільтр за діапазоном значень до списку фільмів
    applyRangeValue(rangeFilter: RangeFilter) {
        this.movies = this.movies.filter(movie => {
            switch (rangeFilter.filter) {
                case 'year':
                    return movie.year >= rangeFilter.filterTo;
                case 'rating':
                    return movie.rating >= rangeFilter.filterTo;
                default:
                    return true;
            }
        });
    }

    applyValuesFilter(valuesFilter: ValuesFilter) {
        // Код для фільтрації
    }
}

// Клас для списку категорій
class CategoryList {
    categories: Category[];
    filters: Filter[];

    constructor(categories: Category[], filters: Filter[]) {
        this.categories = categories;
        this.filters = filters;
    }

    // Метод застосовує фільтр за пошуком до списку категорій
    applySearchValue(searchFilter: SearchFilter) {
        this.categories.forEach(category => {
            category.movies = category.movies.filter(movie => movie.title.toLowerCase().includes(searchFilter.filter.toLowerCase()));
        });
    }

    // Метод застосовує фільтр за діапазоном значень до списку категорій
    applyRangeValue(rangeFilter: RangeFilter) {
        this.categories.forEach(category => {
            category.movies = category.movies.filter(movie => {
                switch (rangeFilter.filter) {
                    case 'year':
                        return movie.year >= rangeFilter.filterTo;
                    case 'rating':
                        return movie.rating >= rangeFilter.filterTo;
                    default:
                        return true;
                }
            });
        });
    }

    applyValuesFilter(valuesFilter: ValuesFilter) {
        // Код для фільтрації
    }
}
