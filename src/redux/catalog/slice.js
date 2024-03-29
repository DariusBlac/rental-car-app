import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getAllCarsThunk, getCarPaginationThunk } from './thunk';

import { makeUniqueBrands } from '../../helpers/helpers';

const initialState = {
  isLoading: false,
  error: null,
  carsAll: [],
  cars: [],
  brands: [],
};

const onPending = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const arrayThunk = [getAllCarsThunk, getCarPaginationThunk];

const addStatusThunk = status => {
  return arrayThunk.map(el => el[status]);
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    clearCars: state => {
      state.cars = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCarsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.brands = makeUniqueBrands(payload);
        state.error = null;
        state.carsAll = payload;
      })
      .addCase(getCarPaginationThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cars = [...state.cars, ...payload];
      })
      .addMatcher(isAnyOf(...addStatusThunk('pending')), onPending)
      .addMatcher(isAnyOf(...addStatusThunk('rejected')), onRejected);
  },
});

export const catalogReducer = catalogSlice.reducer;
export const { clearCars } = catalogSlice.actions;
