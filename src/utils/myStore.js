import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const myStore = configureStore({
    reducer: {
        app: appSlice,
    }
});

export default myStore;
