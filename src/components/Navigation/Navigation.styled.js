import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  font-size: 24px;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  height: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;
  color: var(--color-text-main);

  &.active {
    color: var(--color-text-loadmore-hover);
  }
`;

export const Header = styled.header`
  border-bottom: solid 1px var(--color-text-loadmore-hover);
`;
