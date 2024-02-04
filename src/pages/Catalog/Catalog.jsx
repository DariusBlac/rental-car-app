import { CarList } from 'components/CarList/CarList';
import { Modal } from 'components/Modal/Modal';
import { useSelector } from 'react-redux';
import { modalSelector } from '../../redux/modal/selectors';
import { isLoadingSelector } from '../../redux/catalog/selectors';
import { Filters } from 'components/Filters/Filters';
import { Loader } from 'components/Loader/Loader';

const Catalog = () => {
  const isModalOpen = useSelector(modalSelector);
  const isLoading = useSelector(isLoadingSelector);

  return (
    <>
      {isLoading && <Loader />}
      <Filters />
      <CarList />
      {isModalOpen && <Modal />}
    </>
  );
};

export default Catalog;
