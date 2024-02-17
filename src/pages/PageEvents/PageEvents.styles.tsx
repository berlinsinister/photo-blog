import styled, { css } from 'styled-components';
import { scrollbar } from '../../styles';

export const ContentWrapper = styled.div`
  ${({ theme: { layout, devices } }) => css`
    height: calc(${layout.sizes.height.main});
    overflow: hidden;

    @media ${devices.tablet} {
      height: 100vh;
    }
  `};
`;

export const Main = styled.main`
  ${({ theme: { colors, layout, devices } }) => css`
    margin: ${layout.offsets.margin.main} 50px 0 120px;

    @media ${devices.laptop} {
      margin: ${layout.offsets.margin.main} 50px 0 50px;
    }

    @media ${devices.tablet} {
      height: calc(100vh - ${layout.offsets.margin.main} - 50px);
    }
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

export const CardsWrapper = styled.div`
  ${({ theme: { devices } }) => css`
    display: flex;
    gap: 30px;
    padding-bottom: 50px;
    overflow-y: hidden;
    overflow-x: scroll;
    ${scrollbar('x')};

    @media ${devices.tablet} {
      flex-direction: column;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  `};
`;

export const MouseWrapper = styled.div`
  ${({ theme: { devices } }) => css`
    position: absolute;
    bottom: 50px;
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
