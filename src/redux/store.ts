import { configureStore } from "@reduxjs/toolkit";

// Import: Reducers
import VulnerabilitiesReducer from "./slices/VulnerabilitiesSlice";

const store = configureStore({
  reducer: {
    vulnerabilities: VulnerabilitiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
