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

export const noticesCategory = createAsyncThunk(
    "notices/noticesCategory",
    async(categories, thunkApi)=>{
        try {
            const response = await axios.get(`/notices/categories?${categories}`)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const noticesSex = createAsyncThunk(
    "notices/noticesSex",
    async(sex, thunkApi)=>{
        try {
            const response = await axios.get(`/notices/sex?${sex}`)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const noticesSpecies = createAsyncThunk(
    "notices/noticesSpecies",
    async(species, thunkApi)=>{
        try {
            const response = await axios.get(`/notices/species?${species}`)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)