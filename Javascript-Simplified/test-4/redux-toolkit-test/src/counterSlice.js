// slices/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // (1) Name of the slice
  initialState: 0, // (2) Initial state of the slice
  reducers: {
    increment: (state) => state + 1, // (3) Action to increment the state
    decrement: (state) => state - 1, // (4) Action to decrement the state
  },
});

export const { increment, decrement } = counterSlice.actions; // (5) Exported action creators
export default counterSlice.reducer; // (6) Exported reducer
