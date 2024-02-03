import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { allCarsSelector, carsSelector } from '../../redux/catalog/selectors';
import { clearCars } from '../../redux/catalog/slice';
import {
  LIMIT,
  getAllCarsThunk,
  getCarPaginationThunk,
} from '../../redux/catalog/thunk';
import { CarItem } from 'components/CarItem/CarItem';
import { List, LoadMore } from './CarList.styled';

export const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(carsSelector);
  const allCars = useSelector(allCarsSelector);

  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    dispatch(getAllCarsThunk());
    return () => {
      dispatch(clearCars());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCarPaginationThunk(page));
  }, [dispatch, page]);

  const totalPage = Math.ceil(allCars.length / LIMIT);

  const onClickLoadMore = () => {
    if (page === totalPage - 1) {
      setLoadMore(false);
    }
    setPage(page + 1);
  };

  return (
    <section>
      <div className="container">
        <List>
          {cars?.map(car => (
            <CarItem car={car} key={car.id} />
          ))}
        </List>
        {loadMore && <LoadMore onClick={onClickLoadMore}>Load more</LoadMore>}
      </div>
    </section>
  );
};
