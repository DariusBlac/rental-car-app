import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCar, getCarPagination } from '../../API/catalog';

export const LIMIT = 12;

export const getAllCarsThunk = createAsyncThunk(
  'catalog/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllCar();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCarPaginationThunk = createAsyncThunk(
  'catalog/getCar',
  async (page, { rejectWithValue }) => {
    try {
      const data = await getCarPagination(page, LIMIT);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
