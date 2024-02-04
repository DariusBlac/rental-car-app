import styled from 'styled-components';

export const ModalCarWrap = styled.div`
  margin: 0 auto;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  gap: 24px;
`;

export const ModalCard = styled.div`
  display: flex;
  width: 100%;
  height: 604px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
`;

export const ModalImgWrap = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  background: #f3f3f2;
`;

export const ModalImg = styled.img`
  position: absolute;
  top: -25px;
  right: 0;
  width: 461px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const ModalDescriptionWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
`;

export const Block = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ModalTitleH3 = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.42;
  height: 40px;
  overflow-y: scroll;
`;

export const ModalTitleH4 = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--color-text-conditions);
`;

export const ConditionsItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: var(--color-back-conditions);
`;

export const BackdropModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--color-modal-wrap);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  width: 541px;
  height: 752px;
`;

export const CloseBtnWrapper = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  padding: 0;
  top: ${props => props.$top || '16px'};
  right: ${props => props.$right || '16px'};
  svg {
    display: inline-block;
    width: 24px;
    height: 24px;
    stroke: var(--color-text-main);
  }
`;
