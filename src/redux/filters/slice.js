import { createSlice } from "@reduxjs/toolkit";

const noticesFilters = createSlice({
  name: "filters",
  initialState: {
    filters: {
      category: null,
      sex: null,
      species: null,
      location: null,
      price: null,
      popularity: null,
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
        price: null,
        popularity: null,
      };
    },
  },
});

export const { setFilters, clearFilters } = noticesFilters.actions;

export const filterReducer = noticesFilters.reducer;