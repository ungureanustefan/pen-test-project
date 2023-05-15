import { configureStore } from "@reduxjs/toolkit";

// Import: Reducers

import VulnerabilitiesReducer from "./slices/VulnerabilitiesSlice";

export default configureStore({
  reducer: {
    vulnerabilities: VulnerabilitiesReducer,
  },
});
