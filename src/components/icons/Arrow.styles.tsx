import styled, { css } from 'styled-components';

interface IArrowProps {
  sizeBig: string;
  sizeSmall: string;
  color: string;
  isRight?: boolean;
}

export const Arrow = styled.div<IArrowProps>`
  ${({ sizeBig, sizeSmall, color, isRight }) => css`
    width: 0;
    height: 0;
    border-top: ${sizeSmall} solid transparent;
    border-bottom: ${sizeSmall} solid transparent;
    ${isRight
      ? `border-left: ${sizeBig} solid ${color}`
      : `border-right: ${sizeBig} solid ${color}`};
  `};
`;
