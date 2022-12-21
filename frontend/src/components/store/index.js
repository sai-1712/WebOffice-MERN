import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";
import projectSlice from "./slices/projectSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        project :projectSlice.reducer
    },
});

export default store;
