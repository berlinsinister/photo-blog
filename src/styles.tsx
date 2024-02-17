import { css } from 'styled-components';

export const scrollbar = (
  direction: string = 'y',
  mt: string = '0'
): ReturnType<typeof css> => {
  return css`
    ${({ theme: { colors } }) => css`
      &::-webkit-scrollbar {
        ${direction === 'y'
          ? css`
              width: 5px;
            `
          : css`
              height: 1px;
            `}
      }

      &::-webkit-scrollbar-track {
        background-color: ${colors.neutral.lightest};
        margin-top: ${mt};
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${colors.neutral.aux};
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: ${colors.primary.main};
      }
    `}
  `;
};
