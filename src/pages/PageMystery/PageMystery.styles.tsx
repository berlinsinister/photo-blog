import styled, { css, keyframes } from 'styled-components';

const enterContentWrapper = keyframes`
  to {
    background-color: #000;
    color: #fff;
  }
`;

export const ContentWrapper = styled.div`
  ${({ theme: { colors, layout, devices } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(${layout.sizes.height.main});
    font-weight: 300;
    background-color: #fff;
    color: ${colors.primary.main};
    animation: ${enterContentWrapper} 0.7s ease-in-out forwards;

    @media ${devices.tablet} {
      height: 100vh;
    }
  `};
`;

const enterMystery = keyframes`
  to {
    opacity: 1;
  }
`;

export const Mystery = styled.p`
  opacity: 0;
  animation: ${enterMystery} 0.7s ease-out 4.5s forwards;
`;

const enterDot = keyframes`
  50% {
    opacity: 1;
  }
`;

export const Dot = styled.span`
  width: 5px;
  height: 5px;
  margin: 0 7px;
  border-radius: 100%;
  background-color: #fff;
  opacity: 0;
  animation: ${enterDot} 0.7s linear 1.4s 3;
`;

const enterLine = keyframes`
  to {
    height: 30px;
  }
`;

export const Line = styled.span`
  width: 1px;
  height: 1px;
  margin: 0 9px;
  background-color: #fff;
  animation: ${enterLine} 0.7s ease-out forwards;
`;

const enterComingSoon = keyframes`
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

export const ComingSoon = styled.p`
  opacity: 0;
  transform: translate(30px);
  animation: ${enterComingSoon} 0.7s ease-out 6s forwards;
`;
