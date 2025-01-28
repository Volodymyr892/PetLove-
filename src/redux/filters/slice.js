import { createSlice } from "@reduxjs/toolkit";

const noticesFilters = createSlice({
  name: "filters",
  initialState: {
    filters: {
      category: null,
      sex: null,
      species: null,
      location: null,
      cheap: null,
      popular: null,
      unpopular: null,
      expensive: null,
    },
    results: [],
    page: 1,
    perPage: 6,
    totalPages: 0,
  },
  reducers: {
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters(state) {
      state.filters = {
        category: null,
        sex: null,
        species: null,
        location: null,
        cheap: null,
        popular: null,
        unpopular: null,
        expensive: null,
      };
    },
    clearFiltersRadio(state) {
      state.filters = {
        cheap: null,
        popular: null,
        unpopular: null,
        expensive: null,
      };
    },
  },
});

export const { setFilters, clearFilters, clearFiltersRadio } = noticesFilters.actions;

export const filterReducer = noticesFilters.reducer;