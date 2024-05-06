class Movie {
    constructor(public title: string, public year: number, public rating: number, public awards: string[]) {}
}

class MovieCategory {
    constructor(public name: string, public movies: Movie[]) {}
}

type FilterState = {
    matchingFilters?: { filter: string }[],
    rangeFilters?: { filter: number, filterTo: number }[],
    valuesSearchFilters?: { values: string[] }[]
};
