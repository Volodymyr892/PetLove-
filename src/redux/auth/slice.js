import { createSlice } from "@reduxjs/toolkit";
import { current, currentEdit, currentFull, login, logout, register } from "./operations";


const userSlice = createSlice({
    name:"user",
    initialState: {
        user:{
            name: null,
            email: null,
            avatar: null,
            phone: "+380",
            noticesViewed:[]
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
                state.user = action.payload;
            })
            .addCase(currentFull.fulfilled, (state, action)=>{
                state.user.name = action.payload.name;
                state.user.email = action.payload.email;
                state.user.avatar = action.payload.avatar;
                state.user.phone = action.payload.phone;
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
                state.user ={
                    name: null,
                    email: null,
                    avatar: null,
                    pnone: "+380",
                    noticesViewed:[]
                },
                state.accessToken = null,
                state.isLoggedIn =false,
                state.isRefreshing = false,
                state.isLoading = false,
                state.isError = null
            })
    }
})

export const userReducer = userSlice.reducer;