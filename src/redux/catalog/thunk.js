import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCar } from '../../API/catalog';

export const getAllCarsThunk = createAsyncThunk('catalog/getAll', async () => {
  const data = await getAllCar();
  return data;
});
