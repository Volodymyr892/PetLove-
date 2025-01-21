import { createSlice } from "@reduxjs/toolkit";
import { featchNotices, noticesCategory, noticesSex, noticesSpecies } from "./operations";


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
            console.log("🚀 ~ .addCase ~ state.notices.results:", state.notices.results)
        })
        .addCase(featchNotices.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        .addCase(noticesCategory.fulfilled, (state, action) => {
            state.notices = action.payload;
        })
        .addCase(noticesSex.fulfilled, (state, action) => {
            state.notices = action.payload;
        })
        .addCase(noticesSpecies.fulfilled, (state, action) => {
            state.notices = action.payload;
        })
    }
})

export const noticesReducer = noticesSlice.reducer;