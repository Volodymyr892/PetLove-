import {configureStore} from "@reduxjs/toolkit"
import {persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";
import { newsReducer } from "./news/slice";
import { friendsReducer } from "./friends/slice";
import { noticesReducer } from "./Notices/slice";

const persistConfig = {
    key: "root",
    storage, 
};

const persistedNewsReducer = persistReducer(persistConfig, newsReducer);


export const store = configureStore({
    reducer: {
        news: persistedNewsReducer,
        friends: friendsReducer,
        notices: noticesReducer,
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