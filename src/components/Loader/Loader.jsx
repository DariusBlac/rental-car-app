import { BallTriangle } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';

export const Loader = () => {
  return (
    <Overlay>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#0b44cd"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Overlay>
  );
};
