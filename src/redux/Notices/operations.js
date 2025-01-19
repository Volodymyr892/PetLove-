import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const featchNotices = createAsyncThunk(
    "notices/featchNotices",
    async(_, thunkApi)=>{
        try {
            const response = await axios.get("/notices")
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)