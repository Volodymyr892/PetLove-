import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export const fetchFriends = createAsyncThunk(
    "friends/featchFriends",
    async(_, thunkApi)=>{
        try {
            const response  = await axios.get("/friends/")
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)