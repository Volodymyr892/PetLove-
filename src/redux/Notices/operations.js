import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const featchNotices = createAsyncThunk(
    "notices/featchNotices",
    async({page, perPage}, thunkApi)=>{
        try {
            const response = await axios.get(`/notices?page=${page}&perPage=${perPage}`)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)



