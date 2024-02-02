import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorite = [...state.favorite, ...payload];
    },
    deleteFavorite: (state, { payload }) => {
      const index = state.favorite.findIndex(car => car.id === payload);
      state.favorite.splice(index, 1);
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
