import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 100px;
  margin-top: 50px;
`;

export const LoadMore = styled.button`
  display: ${props => props.display || 'block'};
  color: var(--color-text-loadmore);
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  margin: 0 auto;
  padding: 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--color-text-loadmore-hover);
  }
`;
