import { Outlet, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h2>Rental car</h2>
        <div>
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate('catalog');
            }}
          >
            Catalog
          </button>
          <button
            onClick={() => {
              navigate('favorite');
            }}
          >
            Favorite
          </button>
        </div>
      </div>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
