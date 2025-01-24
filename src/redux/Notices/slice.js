import { createSlice } from "@reduxjs/toolkit";
import { featchNotices, fetchCities, fetchCitiesAll, fetchNoticesSex, fetchNoticesSpecies, noticesCategories } from "./operations";


const noticesSlice = createSlice({
    name: "notices",
    initialState:{
        notices:{
            page: 1,
            perPage: 6,
            totalPages:0,
            results: [],
        },
        error: null,
        isLoading: false,
    },

    extraReducers: builder => {
        builder
        .addCase(featchNotices.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
        .addCase(featchNotices.fulfilled, (state, action) => {
            state.notices = action.payload;
        })
        .addCase(featchNotices.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
         .addCase(noticesCategories.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(noticesCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
        })
        .addCase(noticesCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })

        .addCase(fetchNoticesSex.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchNoticesSex.fulfilled, (state, action) => {
            state.isLoading = false;
            state.sexOptions = action.payload;
        })
        .addCase(fetchNoticesSex.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })


        .addCase(fetchNoticesSpecies.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchNoticesSpecies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.speciesOptions = action.payload;
        })
        .addCase(fetchNoticesSpecies.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
         .addCase(fetchCities.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchCities.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cities = action.payload;
        })
        .addCase(fetchCities.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        // fetchCitiesAll
        .addCase(fetchCitiesAll.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchCitiesAll.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cities = action.payload;
        })
        .addCase(fetchCitiesAll.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
})

export const noticesReducer = noticesSlice.reducer;