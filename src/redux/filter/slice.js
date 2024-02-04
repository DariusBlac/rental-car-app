import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: null,
  filterCars: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterSet(state, { payload }) {
      state.filter = payload;
    },
    filterDelete(state) {
      state.filter = null;
    },
    filterCarsSet(state, { payload }) {
      state.filterCars = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterSet, filterCarsSet, filterDelete } = filterSlice.actions;
