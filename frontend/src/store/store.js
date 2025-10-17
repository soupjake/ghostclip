import { configureStore, combineReducers } from "@reduxjs/toolkit";
import clipReducer from "./clipSlice";

const rootReducer = combineReducers({
  clip: clipReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
