import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  TitleWrap,
  Wrap,
  Title,
  Image,
  Nav,
  StyledNavLink,
  Header,
} from './Navigation.styled';
import car from '../../images/car-rental1.png';

export const Navigation = () => {
  return (
    <>
      <Header>
        <div className="container">
          <Wrap>
            <TitleWrap>
              <Image src={car} alt="icon logo" />
              <Title>Rental car</Title>
            </TitleWrap>
            <Nav>
              <StyledNavLink to={'/'}>Home</StyledNavLink>
              <StyledNavLink to={'/catalog'}>Catalog</StyledNavLink>
              <StyledNavLink to={'/favorite'}>Favorite</StyledNavLink>
            </Nav>
          </Wrap>
        </div>
      </Header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
