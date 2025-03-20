import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favorite-slice";
 const store = configureStore({
    reducer:{
        favorite:favoriteReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;