import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getVulnerabilities = createAsyncThunk(
  "vulnerabilities/getVulnerabilities",
  async () => {
    try {
      const config = {
        method: "GET",
        url: "/vulnerabilities.json",
        headers: {
          accept: "application/json",
        },
      };
      const response = await axios(config);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  vulnerabilitiesData: {},
  vulnerabilitiesFetchStatus: "",
};

export const vulnerabilitiesSlice = createSlice({
  name: "vulnerabilities",
  initialState,
  reducers: {
    vulnerabilitiesSliceResetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVulnerabilities.pending, (state) => {
        state.vulnerabilitiesFetchStatus = "pending";
      })
      .addCase(getVulnerabilities.fulfilled, (state, { payload }) => {
        state.vulnerabilitiesData = payload;
        state.vulnerabilitiesFetchStatus = "fulfilled";
      })
      .addCase(getVulnerabilities.rejected, (state) => {
        state.vulnerabilitiesFetchStatus = "rejected";
      });
  },
});

export const { vulnerabilitiesSliceResetState } = vulnerabilitiesSlice.actions;
export default vulnerabilitiesSlice.reducer;
