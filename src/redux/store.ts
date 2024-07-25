import { Middleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";

import authReducer from "./slices/authSlice";
import userDetailReducer from "./slices/userDetailSlice";
import hamburgerReducer from "./slices/hamburgerSlice";

const middleware: Middleware[] = [];

if (process.env.NODE_ENV === "development") middleware.push(logger);

const rootReducer = combineReducers({
    userDetails: userDetailReducer,
    authDetails: authReducer,
    hamburger: hamburgerReducer,
});

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
