import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

export const register = createAsyncThunk(
    "user/register",
    async(credentials, thunkApi)=>{
        try {
            const response = await axios.post("/users/signup", credentials)
            setAuthHeader(response.data.accessToken);
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
            // console.log("🚀 ~ async ~ response:", response)
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
