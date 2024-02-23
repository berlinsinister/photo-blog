import styled, { css } from 'styled-components';
import { scrollbar } from '../../styles';

const _ = undefined;

export const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const ScrollContent = styled.div`
  ${({ theme: { layout, devices } }) => css`
    height: 100%;
    margin-left: 120px;
    overflow-y: scroll;
    direction: rtl;
    /* related to main's margin-top */
    ${scrollbar(_, layout.offsets.margin.scroll)}

    @media ${devices.laptop} {
      margin-left: 50px;
    }

    @media ${devices.mobile} {
      margin-left: 0;
    }
  `};
`;

export const MouseWrapper = styled.div`
  ${({ theme: { devices } }) => css`
    position: absolute;
    top: 50%;
    left: 95px;

    @media ${devices.laptop} {
      left: 25px;
    }

    @media ${devices.mobile} {
      display: none;
    }
  `};
`;

export const ScrollText = styled.p`
  ${({ theme: { colors } }) => css`
    position: absolute;
    top: 35px;
    left: 0;
    font-size: 14px;
    font-weight: 300;
    writing-mode: vertical-rl;
    color: ${colors.neutral.main};
    user-select: none;
    transform: rotate(180deg);
  `};
`;

export const Main = styled.main`
  ${({ theme: { layout, devices } }) => css`
    display: flex;
    flex-direction: column;
    /* related to scrollbar's margin-top */
    margin-top: ${layout.offsets.margin.scroll};
    padding: 0 ${layout.offsets.padding.main};
    direction: ltr;

    @media ${devices.laptop} {
      padding: 0 30px;
    }

    @media ${devices.tablet} {
      gap: 20px;
      padding: 25px;
      padding-top: 0;
    }
  `};
`;
