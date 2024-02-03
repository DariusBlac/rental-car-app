import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 100px;
  padding-left: 100px;
  width: 100%;
  height: calc(100vh - 41px);
  background-color: black;
  background-image: ${props => props.$url || 'none'};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h1`
  width: 400px;
`;

export const Description = styled.p`
  font-size: 24px;
`;

export const Welcome = styled.div`
  display: block;
  width: 480px;
  padding: 40px;
  height: 200px;
  color: var(--color-text-main);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
`;
