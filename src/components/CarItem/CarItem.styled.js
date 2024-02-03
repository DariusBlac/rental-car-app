import styled from 'styled-components';

export const CarItemStyle = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  gap: 28px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CarCard = styled.div`
  display: flex;
  width: 274px;
  height: 354px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
`;

export const ImgWrap = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  right: -65px;
  height: 268px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Heart = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background-color: transparent;
  svg {
    fill: ${props => props.fill || 'none'};
    stroke: ${props => props.stroke || 'var(--color-text-button-and-back)'};
    display: inline-block;
    width: 18px;
    height: 18px;
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

export const TitleWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
`;

export const TitleH3 = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const Span = styled.span`
  color: var(--color-text-loadmore);
`;

export const DescriptListWrap = styled.div`
  display: flex;
  height: ${props => props.height || 'auto'};
  gap: ${props => props.$gap || '4px'};
  flex-direction: column;
`;

export const DescriptList = styled.ul`
  display: inline-flex;
  height: 18px;
  gap: 6px;
  color: var(--color-text-second);
  white-space: nowrap;
  overflow-x: ${props => props.$overflow || 'hidden'};
  overflow-y: hidden;
`;

export const DescriptItem = styled.li`
  display: flex;
  flex-shrink: 1;

  &:not(:first-child) {
    &:before {
      display: block;
      height: 16px;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      margin-right: 6px;
      content: '';
    }
  }
`;

export const Button = styled.button`
  display: flex;
  width: ${props => props.width || '100%'};
  height: 44px;
  padding: 12px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  background: var(--color-button);
  color: var(--color-text-button-and-back);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  &:focus {
    background: var(--color-button-hover);
  }
`;
