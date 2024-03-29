import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalCarSelector } from '../../redux/modal/selectors';
import { closeModal } from '../../redux/modal/slice';
import sprite from '../../images/sprite.svg';
import carNotFound from '../../images/not-found.webp';
import { addCommaInMileage, getNumberFromPrice } from '../../helpers/helpers';

import {
  Button,
  DescriptItem,
  DescriptList,
  DescriptListWrap,
  Span,
} from '../CarItem/CarItem.styled';

import {
  Block,
  ConditionsItem,
  ConditionsList,
  Description,
  ModalCarWrap,
  ModalCard,
  ModalDescriptionWrap,
  ModalImg,
  ModalImgWrap,
  ModalTitleH3,
  ModalTitleH4,
  ModalContainer,
  CloseBtnWrapper,
  BackdropModal,
} from './Modal.styled';

export const Modal = () => {
  const dispatch = useDispatch();
  const car = useSelector(modalCarSelector);

  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    mileage,
    type,
    functionalities,
    address,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
  } = car;

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEsc);
    return () => {
      document.removeEventListener('keydown', handleKeyEsc);
    };
  });

  const handleKeyEsc = event => {
    if (event.code === 'Escape') dispatch(closeModal());
  };

  const onCloseModalBacdrop = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      dispatch(closeModal());
    }
  };

  const cityCountry = address?.split(', ').slice(-2);
  const arrOfConditions = rentalConditions.split('\n');

  const age = conditionWithAge => {
    const conditionWithAgeArr = conditionWithAge.split(': ');
    return conditionWithAgeArr;
  };

  return (
    <BackdropModal onClick={onCloseModalBacdrop}>
      <ModalContainer onClick={handleKeyEsc}>
        <CloseBtnWrapper
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          <svg>
            <use href={`${sprite}#close`} />
          </svg>
        </CloseBtnWrapper>
        <ModalCarWrap key={id}>
          <ModalCard>
            <ModalImgWrap>
              <ModalImg src={img ? img : carNotFound} alt={make} />
            </ModalImgWrap>
            <ModalDescriptionWrap>
              <Block>
                <ModalTitleH3>
                  {make}
                  <Span> {model}</Span>, {year}
                </ModalTitleH3>
                <DescriptListWrap>
                  <DescriptList>
                    <DescriptItem>{cityCountry[0]}</DescriptItem>
                    <DescriptItem>{cityCountry[1]}</DescriptItem>
                    <DescriptItem>Id: {id}</DescriptItem>
                    <DescriptItem>Year: {year}</DescriptItem>
                    <DescriptItem>Type: {type}</DescriptItem>
                  </DescriptList>
                  <DescriptList>
                    <DescriptItem>
                      Fuel Consumption: {fuelConsumption}
                    </DescriptItem>
                    <DescriptItem>Engine Size: {engineSize}</DescriptItem>
                  </DescriptList>
                </DescriptListWrap>
                <Description>{description}</Description>
              </Block>
              <Block>
                <ModalTitleH4>Accessories and functionalities:</ModalTitleH4>
                <DescriptListWrap>
                  <DescriptList>
                    {accessories?.map((item, index) => (
                      <DescriptItem key={index}>{item}</DescriptItem>
                    ))}
                  </DescriptList>
                  <DescriptList>
                    {functionalities?.map((item, index) => (
                      <DescriptItem key={index}>{item}</DescriptItem>
                    ))}
                  </DescriptList>
                </DescriptListWrap>
              </Block>
              <Block>
                <ModalTitleH4>Rental Conditions:</ModalTitleH4>
                <DescriptListWrap $gap="8px">
                  <ConditionsList>
                    <ConditionsItem>
                      {age(arrOfConditions[0])[0]}:{' '}
                      <Span>{age(arrOfConditions[0])[1]}</Span>
                    </ConditionsItem>
                    <ConditionsItem>{arrOfConditions[1]}</ConditionsItem>
                  </ConditionsList>
                  <ConditionsList>
                    <ConditionsItem>{arrOfConditions[2]}</ConditionsItem>
                    <ConditionsItem>
                      Mileage: <Span>{addCommaInMileage(mileage)}</Span>
                    </ConditionsItem>
                    <ConditionsItem>
                      Price: <Span>{getNumberFromPrice(rentalPrice)}$</Span>
                    </ConditionsItem>
                  </ConditionsList>
                </DescriptListWrap>
              </Block>
            </ModalDescriptionWrap>
          </ModalCard>
          <Button
            width="168px"
            onClick={() => (window.location.href = 'tel:+380730000000')}
          >
            Rental car
          </Button>
        </ModalCarWrap>
      </ModalContainer>
    </BackdropModal>
  );
};
