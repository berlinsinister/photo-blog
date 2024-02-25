import styled, { css } from 'styled-components';
import { scrollbar } from '../../styles';

export const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 140px 50px 70px 120px;

  border: 2px solid magenta;
`;

export const Main = styled.main`
  ${({ theme: { colors, layout, devices } }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;

    // border: 4px solid lime;
  `};
`;

export const Title = styled.h2`
  ${({ theme: { colors, devices } }) => css`
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: 300;
    letter-spacing: -1px;
    color: ${colors.neutral.light};

    @media ${devices.tablet} {
      font-size: 28px;
    }
  `};
`;

export const ScrollContent = styled.div`
  ${({ theme: { devices } }) => css`
    // border: 2px solid darkblue;

    display: flex;
    gap: 20px;
    height: 100%;
    padding-bottom: 30px;
    overflow-x: scroll;
    overflow-y: hidden;
    ${scrollbar('x')};
  `};
`;

export const MouseWrapper = styled.div`
  ${({ theme: { devices } }) => css`
    position: absolute;
    bottom: 30px;
    left: 120px;

    @media ${devices.laptop} {
      left: 50px;
    }

    @media ${devices.tablet} {
      display: none;
    }
  `};
`;

export const ScrollText = styled.p`
  ${({ theme: { colors } }) => css`
    position: absolute;
    top: 0;
    left: 35px;
    font-size: 14px;
    font-weight: 300;
    color: ${colors.neutral.main};
    user-select: none;
  `};
`;
