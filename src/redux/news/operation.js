import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const news = createAsyncThunk(
    "news/news",
    async(_, thunkApi)=>{
        try {
            const response  = await axios.get("/news")
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)