import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "news",
    initialState:{
        news: {
            page: 1,
            perPage: 2,
            totalPages: 576,
            results: []
        }
    }, 
    
    extraReducers: builder => {
        builder
    }
    
})

export const newsReducer = newsSlice.reducer;