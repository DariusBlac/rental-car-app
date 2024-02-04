import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { brandsSelector } from '../../redux/catalog/selectors';
import {
  ButtonSearch,
  Form,
  Label,
  FalseInput,
  firstSelectStyles,
  secondSelectStyles,
} from './Filters.styled';
import Select from 'react-select';
import { filterSet } from '../../redux/filter/slice';

export const Filters = () => {
  const dispatch = useDispatch();
  const carBrands = useSelector(brandsSelector);

  const [brand, setBrand] = useState({ value: 'all', label: 'Enter the text' });
  const [toPrice, setToPrice] = useState({ value: 'all', label: '' });

  const pricesArray = [{ value: 'all', label: 'All price' }];
  for (let index = 10; index < 501; index += 10) {
    pricesArray.push({ value: index, label: index });
  }

  const onClickSearch = () => {
    const commonFilter = {
      brand: brand.value,
      priceTo: toPrice.value,
    };
    dispatch(filterSet(commonFilter));
  };

  return (
    <Form>
      <Label>
        Car brand
        <Select
          onChange={setBrand}
          options={carBrands}
          isSearchable
          placeholder="Enter the text"
          styles={firstSelectStyles}
          value={brand}
        />
      </Label>
      <Label>
        Price/ 1 hour
        <Select
          onChange={setToPrice}
          options={pricesArray}
          isSearchable
          placeholder=""
          styles={secondSelectStyles}
          value={toPrice}
        />
        <FalseInput $left="18px">To</FalseInput>
        <FalseInput $left="75px">$</FalseInput>
      </Label>
      <ButtonSearch type="button" onClick={onClickSearch}>
        Search
      </ButtonSearch>
    </Form>
  );
};
