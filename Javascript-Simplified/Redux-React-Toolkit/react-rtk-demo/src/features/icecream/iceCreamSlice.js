import cakeActions from "../cake/cakeSlice";
import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restock: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  // extraReducers:{
  //   ['cake/ordered']:(state,action)=>{
  //     state.numOfIceCreams--
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restock } = iceCreamSlice.actions;
