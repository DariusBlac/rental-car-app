import sprite from '../../images/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addFavorite, deleteFavorite } from '../../redux/favorite/slice';
import { favoriteCarsSelector } from '../../redux/favorite/selectors';
import CarNotFound from '../../images/not-found.webp';
import { openModal } from '../../redux/modal/slice';
import {
  CarItemStyle,
  CarCard,
  Img,
  ImgWrap,
  Heart,
  DescriptionWrap,
  TitleWrap,
  DescriptListWrap,
  DescriptList,
  DescriptItem,
  Button,
  TitleH3,
} from './CarItem.styled';

export const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const favoriteCarsArray = useSelector(favoriteCarsSelector);
  const [isCarFavorite, setIsCarFavorite] = useState(false);

  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    address,
  } = car;

  const adressArray = address?.split(',').slice(-2);

  useEffect(() => {
    if (favoriteCarsArray?.some(item => item.id === id)) {
      setIsCarFavorite(true);
    } else {
      setIsCarFavorite(false);
    }
  }, [favoriteCarsArray, id]);

  const onClickHeart = () => {
    isCarFavorite ? dispatch(deleteFavorite(id)) : dispatch(addFavorite(car));
  };

  const onClickOpen = () => {
    dispatch(openModal(car));
  };

  return (
    <CarItemStyle>
      <CarCard>
        <ImgWrap>
          <Img src={img ? img : CarNotFound} alt={model} />
          <Heart
            onClick={onClickHeart}
            fill={isCarFavorite ? 'var(--color-button)' : 'none'}
            stroke={
              isCarFavorite
                ? 'var(--color-button)'
                : 'var(--color-text-button-and-back)'
            }
          >
            <svg>
              <use href={`${sprite}#heart`} />
            </svg>
          </Heart>
        </ImgWrap>
        <DescriptionWrap>
          <TitleWrap>
            <TitleH3>
              {make}, {year}
            </TitleH3>
            <p>{rentalPrice}</p>
          </TitleWrap>
          <DescriptListWrap>
            <DescriptList>
              <DescriptItem>{adressArray[0]}</DescriptItem>
              <DescriptItem>{adressArray[1]}</DescriptItem>
              <DescriptItem>{rentalCompany}</DescriptItem>
              <DescriptItem>Premium</DescriptItem>
            </DescriptList>
            <DescriptList>
              <DescriptItem>{type}</DescriptItem>
              <DescriptItem>{model}</DescriptItem>
              <DescriptItem>{id}</DescriptItem>
              <DescriptItem>{functionalities[0]}</DescriptItem>
            </DescriptList>
          </DescriptListWrap>
        </DescriptionWrap>
      </CarCard>
      <Button onClick={onClickOpen}>Learn more</Button>
    </CarItemStyle>
  );
};
