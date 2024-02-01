import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCarsThunk } from '../redux/catalog/thunk';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCarsThunk());
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={'home'} />
          <Route path="catalog" element={'catalog'} />
          <Route path="favorite" element={'favorite'} />
          <Route path="*" element={'home'} />
        </Route>
      </Routes>
    </>
  );
};
