import { createSlice } from "@reduxjs/toolkit";
import { fetchFriends } from "./operations.js";

const friendsSlice = createSlice({
    name: "friends",
    initialState:{
        friends: {
            page: 1,
            perPage: 6,
            totalPages: 0,
            results: []
        },
        error: null,
        isLoading: false,
    }, 
    
    extraReducers: builder => {
        builder
        .addCase(fetchFriends.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
        .addCase(fetchFriends.fulfilled, (state, action) => {
            state.friends.results = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchFriends.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
    
})
export const friendsReducer = friendsSlice.reducer;