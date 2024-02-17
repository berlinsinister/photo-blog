import styled, { css, keyframes } from 'styled-components';

export const Body = styled.div`
  ${({ theme: { colors, direction } }) => css`
    display: flex;
    justify-content: center;
    ${direction === 'y'
      ? css`
          width: 16px;
          height: 27px;
        `
      : css`
          width: 27px;
          height: 16px;
        `}
    border-radius: 8px;
    border: 1px solid ${colors.neutral.main};
  `};
`;

export const swingWheel = (direction: string): ReturnType<typeof keyframes> => {
  return keyframes`
    50% {
      ${
        direction === 'y'
          ? css`
              transform: translateY(5px);
            `
          : css`
              transform: translateX(-5px);
            `
      }
    }
  `;
};

export const Wheel = styled.div`
  ${({ theme: { colors, direction } }) => css`
    width: 4px;
    height: 4px;
    margin-top: 5px;
    border-radius: 100%;
    background-color: ${colors.neutral.main};
    animation: ${swingWheel(direction)} 0.8s infinite;
  `};
`;
