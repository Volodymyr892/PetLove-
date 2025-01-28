import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const featchNotices = createAsyncThunk(
    "notices/featchNotices",
    async ({ page, perPage, category, sex, type}, thunkApi) => {
        try {
            // Створюємо об'єкт параметрів запиту
            const queryParams = new URLSearchParams({
                page,
                perPage,
                ...(category && { category }),
                ...(sex && { sex }),
                ...(type && { type }),
            }).toString();
            console.log("🚀 ~ queryParams:", queryParams)

            // Відправляємо GET запит з параметрами
            const response = await axios.get(`/notices?${queryParams}`);
            console.log("🚀 ~ response:", response)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const noticesCategories = createAsyncThunk(
    "notices/noticesCategories",
    async(_, thunkApi)=>{
        try {
            const response = await axios.get("/notices/categories")
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)
export const fetchNoticesSex = createAsyncThunk(
    "notices/fetchSex",
    async (_, thunkApi) => {
        try {
            const response = await axios.get("/notices/sex");
            return response.data; // Результати по статі
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
export const fetchNoticesSpecies = createAsyncThunk(
    "notices/fetchSpecies",
    async (_, thunkApi) => {
        try {
            const response = await axios.get("/notices/species");
            return response.data; 
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const fetchCities = createAsyncThunk(
    "notices/fetchCities",
    async (_, thunkApi) => {
        try {
            const response = await axios.get("/cities");
            return response.data; 
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)
export const fetchCitiesAll = createAsyncThunk(
    "notices/fetchCitiesAll",
    async (_, thunkApi) => {
        try {
            const response = await axios.get("/cities/locations");
            return response.data; 
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)
