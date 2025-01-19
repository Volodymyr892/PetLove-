import { createSlice } from "@reduxjs/toolkit";
import { fetchNews} from "./operation";

const newsSlice = createSlice({
    name: "news",
    initialState:{
        news: {
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
        .addCase(fetchNews.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
        .addCase(fetchNews.fulfilled, (state, action) => {
            state.news = action.payload;
        })
        .addCase(fetchNews.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
    
})

export const newsReducer = newsSlice.reducer;