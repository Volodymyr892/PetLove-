import { createSlice } from "@reduxjs/toolkit";
import { current, currentDelette, currentEdit, currentFull, currentPetAdd, login, logout, noticesFavoritesAdd, noticesFavoritesDelete, register } from "./operations.js";


const userSlice = createSlice({ 
    name:"user",
    initialState: {
        user:{
            name: null,
            email: null,
            avatar: null,
            phone: "+380",
            noticesViewed:[],
            pets:[],
            noticesFavorites: [],
        },
        userId: null,
        accessToken: null,
        isLoggedIn: false,
        isRefreshing: false,
        isLoading: false,
        isError: null,
    },
    extraReducers: builder => {
        builder
            .addCase(register.pending, state => {
            state.isLoading = false;
            })
            .addCase(register.fulfilled, (state, { payload }) => {
            state.isLoggedIn = true;
            state.isLoading = true;
            state.accessToken = payload.token;
            state.user = payload.data;
            
            })
            .addCase(register.rejected, (state, { payload }) => {
            state.isLoggedIn = false;
            state.isLoading = false;
            state.accessToken = null;
            state.isError = payload;
            })

            .addCase(login.pending, state => {
            state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
            state.isError = null;
            state.isLoading = true;
            state.isLoggedIn = true;
            state.accessToken = payload.token;
            state.user.email =payload.email;
            })
            .addCase(login.rejected, (state, { payload }) => {
            state.isLoggedIn = false;
            state.isLoading = false;
            state.accessToken = null;
            state.isError = payload;
            })

            .addCase(current.pending, state =>{
            state.isLoading = true;
            })
            .addCase(current.fulfilled, (state, action)=>{
                state.user.name = action.payload.name;
                state.user.email = action.payload.email;
                state.isLoggedIn = true;
                state.isRefreshing = false;
                state.user = action.payload;
            })

            .addCase(currentFull.fulfilled, (state, action)=>{
                state.isLoggedIn = true;
                state.isRefreshing = false;
                
                state.user.name = action.payload.name || [];
                state.user.email = action.payload.email;
                state.user.avatar = action.payload.avatar;
                state.user.phone = action.payload.phone;
                state.user.noticesViewed = action.payload.noticesFavorites;
            })

            .addCase(currentEdit.pending, state =>{
                state.isLoading = true;
                })
            .addCase(currentEdit.fulfilled, (state, action)=>{
                state.user.name = action.payload.name;
                state.user.email = action.payload.email;
                state.user.avatar = action.payload.avatar;
                state.user.phone = action.payload.phone;
            })
            .addCase(currentEdit.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                state.accessToken = null;
                state.isError = action.payload.error;
            })

            .addCase(logout.fulfilled, state =>{
                state.accessToken = null,
                state.isLoggedIn =false,
                state.isRefreshing = false,
                state.isLoading = false,
                state.isError = null
            })

            .addCase(currentPetAdd.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(currentPetAdd.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.user.pets = action.payload.pets;
            })
            .addCase(currentPetAdd.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })

            .addCase(currentDelette.pending, state => {
                state.isLoading = true;
            })
            .addCase(currentDelette.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user.pets = state.user.pets.filter(pet => pet._id !== action.meta.arg);
            })
            .addCase(currentDelette.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })

            .addCase(noticesFavoritesAdd.pending, state => {
                state.isLoading = true;
            })
            .addCase(noticesFavoritesAdd.fulfilled, (state,action)=>{
                
                state.isLoading = false;
                state.user.noticesFavorites = action.payload; 
                state.user.noticesViewed = action.payload;
            })

            .addCase(noticesFavoritesDelete.pending, state => {
                state.isLoading = true;
            })
            .addCase(noticesFavoritesDelete.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user.noticesFavorites = state.user.noticesFavorites.filter(favorit => favorit._id !== action.meta.arg);
            })
            .addCase(noticesFavoritesDelete.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })
    }
})
export const userReducer = userSlice.reducer;