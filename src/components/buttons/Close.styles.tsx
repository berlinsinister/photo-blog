import styled, { css } from 'styled-components';

type CloseProps = {
  width: string;
  color: string;
};

export const Close = styled.button<CloseProps>`
  ${({ theme: { colors }, width, color }) => css`
    all: unset;
    position: relative;
    width: ${width};
    height: ${width};
    cursor: pointer;
    transition: 0.25s ease-out;

    &:hover {
      transform: rotate(-90deg);
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 1px;
      background-color: ${color};
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  `};
`;
