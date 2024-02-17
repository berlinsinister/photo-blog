import styled, { css, keyframes } from 'styled-components';

interface IPageProps {
  isDarkMode?: boolean;
}

const enterPage = keyframes`
  to {
    background-color: #000;
  }
`;

export const Page = styled.div<IPageProps>`
  ${({ theme: { colors, devices }, isDarkMode }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${colors.neutral.lightest};
    transition: 0.2s ease-out;
    ${isDarkMode &&
    css`
      animation: ${enterPage} 0.7s ease-in-out 5s forwards;
    `}

    @media ${devices.tablet} {
      display: block;
      background-color: #fff;
    }
  `};
`;

interface ILayoutProps {
  hasHeight?: boolean;
}

export const Layout = styled.div<ILayoutProps>`
  ${({ theme: { layout, devices }, hasHeight }) => css`
    /* for mouse icon */
    position: relative;
    max-width: ${layout.sizes.width.main};
    width: 100%;
    background-color: #fff;
    box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.2);
    ${hasHeight &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: calc(100vh - 200px);
      border: 2px solid royalblue;
    `};
  `};
`;
