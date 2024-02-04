import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { allCarsSelector, carsSelector } from '../../redux/catalog/selectors';
import { filterDelete, filterCarsSet } from '../../redux/filter/slice';
import { getNumberFromPrice } from '../../helpers/helpers';
import { TitleEmpty } from '../../pages/Favorite/Fvorite.styled';
import {
  filterCarsSelector,
  filtersSelector,
} from '../../redux/filter/selectors';
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

  const filterCars = useSelector(filterCarsSelector);
  const filter = useSelector(filtersSelector);

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

  useEffect(() => {
    if (filter === null) {
      return;
    }

    const { brand, priceTo } = filter;

    if (brand === 'all' && priceTo === 'all') {
      dispatch(filterDelete());
      return;
    }

    const filterBrandCars =
      brand !== 'all' && allCars.filter(car => car.make === brand);

    const filterBrandPriceCars =
      priceTo !== 'all'
        ? filterBrandCars
          ? filterBrandCars.filter(
              car => getNumberFromPrice(car.rentalPrice) <= priceTo
            )
          : allCars.filter(
              car => getNumberFromPrice(car.rentalPrice) <= priceTo
            )
        : false;

    if (priceTo !== 'all') {
      dispatch(filterCarsSet(filterBrandPriceCars));
    } else {
      if (brand !== 'all') {
        dispatch(filterCarsSet(filterBrandCars));
      } else {
        return;
      }
    }
  }, [dispatch, filter, allCars]);

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
        {filter !== null && filterCars.length > 0 && (
          <List>
            {filterCars?.map(car => (
              <CarItem car={car} key={car.id} />
            ))}{' '}
          </List>
        )}

        {filter !== null && filterCars.length === 0 && (
          <TitleEmpty>Search returned no results</TitleEmpty>
        )}

        {filter === null && (
          <>
            <List>
              {cars?.map(car => (
                <CarItem car={car} key={car.id} />
              ))}
            </List>
            {loadMore && (
              <LoadMore onClick={onClickLoadMore}>Load more</LoadMore>
            )}
          </>
        )}
      </div>
    </section>
  );
};
