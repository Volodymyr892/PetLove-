import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

export const register = createAsyncThunk(
    "user/register",
    async(credentials, thunkApi)=>{
        try {
            const response = await axios.post("/users/signup", credentials)
            setAuthHeader(response.data.accessToken);
            localStorage.setItem("accessToken", response.data.token);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const login = createAsyncThunk(
    "user/login",
    async(credentials, thunkApi)=>{
        try {
            const response = await axios.post("/users/signin", credentials);
            // console.log("🚀 ~ async ~ response:", response)
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const current = createAsyncThunk(
    "user/current", 
    async(_, thunkApi)=>{
        try {
            const response = await axios.get("/users/current");
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const currentFull = createAsyncThunk(
    "user/currentFull",
    async(_ ,thunkApi)=>{
        try {
            const response = await axios.get("/users/current/full")
            // console.log("🚀 ~ async ~ response:", response)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const currentEdit = createAsyncThunk(
    "user/currentEdit",
    async(credentials,thunkApi)=>{
        try {
            const response = await axios.patch("users/current/edit", credentials);
            console.log("🚀 ~ async ~ response:", response)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)


export const logout = createAsyncThunk(
    "user/signout",
    async(_, thunkApi)=>{
        try {
            const response = await axios.post("/users/signout")
            setAuthHeader(response.data.accessToken);
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const currentPetAdd = createAsyncThunk(
    "user/currentPetAdd",
    async(credentials, thunkApi)=>{
        try {
            const response = await axios.post("/users/current/pets/add", credentials)
            console.log("🚀 ~ async ~ response:", response)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const currentDelette = createAsyncThunk(
    "user/currentDelete",
    async(id, thunkApi)=>{
        try {
            const response = await axios.delete(`/users/current/pets/remove/${id}`)
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const noticesFavoritesAdd = createAsyncThunk(
    "notices/noticesFavoritesAdd",
    async(id,thunkApi)=>{
        try {
            const response =  await axios.post(`/notices/favorites/add/${id}`)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }

)