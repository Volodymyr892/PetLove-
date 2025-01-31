import {configureStore} from "@reduxjs/toolkit"
import {persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";
import { newsReducer } from "./news/slice";
import { friendsReducer } from "./friends/slice";
import { noticesReducer } from "./notices/slice.js";
import { userReducer } from "./auth/slice";
import { filterReducer } from "./filters/slice";
const authPersistConfig = {
    key: "auth-token",
    storage,
    whitelist: ["accessToken", "user"],
  };
  
  const persistedAuthReducer = persistReducer(authPersistConfig, userReducer);



export const store = configureStore({
    reducer: {
        user:persistedAuthReducer,
        news: newsReducer,
        notices: noticesReducer,
        friends: friendsReducer,
        filters: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
    }),
})
export const persistor = persistStore(store);