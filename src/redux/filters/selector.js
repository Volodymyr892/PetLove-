export const selectFilters = (state) => state.filters.filters;

export const selectFiltersCheap = (state) => state.filters.filters.cheap;
export const selectFiltersExpensive = (state) => state.filters.filters.expensive;

export const selectFiltersPopular = (state) => state.filters.filters.popular;
export const selectFiltersUnpopular = (state) => state.filters.filters.unpopular;
