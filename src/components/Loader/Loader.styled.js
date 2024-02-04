import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-modal-wrap);
  align-items: center;
  justify-content: center;
  z-index: 5;
`;
