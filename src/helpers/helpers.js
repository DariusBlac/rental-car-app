export const addCommaInMileage = mileage => {
  const lengthMileage = mileage.toString().length;
  if (lengthMileage <= 3) {
    return mileage;
  }
  const mileageStringArr = mileage.toString().split('');
  mileageStringArr.splice(lengthMileage - 3, 0, ',');
  return mileageStringArr.join('');
};

export const getNumberFromPrice = stringPrise => {
  const price = parseInt(stringPrise.replace('$', ''));
  return price;
};

export const makeUniqueBrands = payload => {
  const brands = payload?.map(car => car.make);
  const uniqueBrands = brands.filter(
    (brand, index, array) => array.indexOf(brand) === index
  );
  const uniqueBrandsArray = [
    { value: 'all', label: 'All Brands' },
    ...uniqueBrands.map(brand => {
      return { value: brand, label: brand };
    }),
  ];
  return uniqueBrandsArray;
};
