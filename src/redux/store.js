import {configureStore} from "@reduxjs/toolkit"
import {persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"; // локальне сховище
import { newsReducer } from "./news/slice";

const persistConfig = {
    key: "root", // Ключ для збереження в localStorage
    storage, // Сховище
};

// Обгортаємо ваш reducer в persistReducer
const persistedNewsReducer = persistReducer(persistConfig, newsReducer);


export const store = configureStore({
    reducer: {
        news: persistedNewsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
    }),
})
export const persistor = persistStore(store);
console.log('Persistor state:', persistor.getState());