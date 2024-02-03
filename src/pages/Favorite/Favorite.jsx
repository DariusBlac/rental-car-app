import { CarItem } from '../../components/CarItem/CarItem';
import { useSelector } from 'react-redux';
import { favoriteCarsSelector } from '../../redux/favorite/selectors';
import { List } from '../../components/CarList/CarList.styled';
import { Link } from 'react-router-dom';
import { TitleEmpty } from './Fvorite.styled';

const Favorite = () => {
  const favoriteCars = useSelector(favoriteCarsSelector);

  return (
    <section>
      <div className="container">
        {favoriteCars.length > 0 ? (
          <List>
            {favoriteCars.map(car => (
              <CarItem car={car} key={car.id} />
            ))}
          </List>
        ) : (
          <TitleEmpty>
            Add your favorites car in the <Link to={'/catalog'}>Catalog</Link>
          </TitleEmpty>
        )}
      </div>
    </section>
  );
};

export default Favorite;
