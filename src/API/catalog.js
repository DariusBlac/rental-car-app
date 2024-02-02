import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://652e62470b8d8ddac0b14795.mockapi.io/',
});

export const getAllCar = async () => {
  const { data } = await instance.get('advert');
  return data;
};

export const getCarPagination = async page => {
  const { data } = await instance.get(`advert?page=${page}&limit=12`);
  return data;
};
