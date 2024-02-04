import { createSlice } from '@reduxjs/toolkit';

const body = document.querySelector('body');

const initialState = {
  showModal: false,
  element: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.showModal = true;
      body.classList.add('modal-open');
      state.element = payload;
    },
    closeModal: state => {
      state.showModal = false;
      body.classList.remove('modal-open');
      state.element = null;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
