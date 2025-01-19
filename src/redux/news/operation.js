import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async(_, thunkApi)=>{
        try {
            const response  = await axios.get("/news")
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)
