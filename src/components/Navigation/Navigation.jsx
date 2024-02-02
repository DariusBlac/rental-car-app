import { Outlet, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div>
          <h2>Rental car</h2>
        </div>
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
      </header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
