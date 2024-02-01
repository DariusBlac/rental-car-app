import { createSlice } from '@reduxjs/toolkit';

import { getAllCarsThunk } from './thunk';

const initialState = {
  isLoading: false,
  error: null,
  cars: [],
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllCarsThunk.fulfilled, (state, { payload }) => {
      state.cars = payload;
    });
  },
});

export const catalogReducer = catalogSlice.reducer;
