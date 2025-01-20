import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async({ page, perPage }, thunkApi)=>{
        try {
            const response  = await axios.get(`/news?page=${page}&perPage=${perPage}`)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)
