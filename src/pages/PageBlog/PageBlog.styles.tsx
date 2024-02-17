import styled, { css, keyframes } from 'styled-components';
import { scrollbar } from '../../styles';

export const ContentWrapper = styled.div`
  ${({ theme: { layout, devices } }) => css`
    max-height: calc(${layout.sizes.height.main});
    overflow: hidden;

    @media ${devices.tablet} {
      max-height: none;
      height: 100vh;
    }
  `};
`;

export const Main = styled.main`
  ${({ theme: { layout, devices } }) => css`
    display: flex;
    margin-top: ${layout.offsets.margin.main};

    @media ${devices.tablet} {
      flex-direction: column;
    }
  `};
`;

const enterPhoto = (
  marginTop: string,
  isTranslatable: boolean = true
): ReturnType<typeof keyframes> => keyframes`
  to {
    opacity: 1;
    ${
      isTranslatable &&
      css`
        transform: translateY(-${marginTop});
      `
    }
  }
`;

/* photo */
export const Photo = styled.div`
  ${({ theme: { layout, devices } }) => css`
    width: 50%;
    height: calc(${layout.sizes.height.main});
    background-image: url('https://drscdn.500px.org/photo/195517091/q%3D80_m%3D1500/v2?sig=f8a61ed6af679136a53b09a0d1c52f6618c748104f4b8cb3bfc82c389a5a6a68');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
    z-index: 1;
    filter: brightness(1.1);
    animation: ${enterPhoto(layout.offsets.margin.main)} 0.4s ease-out 0.5s
      forwards;

    @media ${devices.laptop} {
      width: 40%;
      animation: ${enterPhoto(layout.offsets.margin.main, false)} 0.4s ease-out
        0.5s forwards;
    }

    @media ${devices.tablet} {
      display: none;
    }
  `}
`;

/* post */
export const PostWrapper = styled.div`
  ${({ theme: { layout, devices } }) => css`
    position: relative;
    width: 50%;
    padding: ${layout.offsets.padding.main};
    padding-top: 0;

    @media ${devices.laptop} {
      width: 60%;
    }

    @media ${devices.tablet} {
      width: 100%;
    }
  `};
`;

const postHeading = {
  height: '110px',
  marginBottom: '40px',
};

export const PostHeading = styled.div`
  ${({ theme: { devices } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: ${postHeading.height};
    margin-bottom: ${postHeading.marginBottom};

    @media ${devices.mobile} {
      align-items: center;
    }
  `};
`;

export const Date = styled.p`
  ${({ theme: { colors, devices } }) => css`
    position: relative;
    align-self: flex-end;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${colors.neutral.main};

    &:hover::after {
      width: 100%;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -7px;
      right: 0;
      width: 30px;
      height: 2px;
      background-color: ${colors.neutral.light};
      transition: 0.2s ease-out;
    }

    @media ${devices.mobile} {
      margin-bottom: 10px;
    }
  `};
`;

const enterTitle = keyframes`
  to {
    letter-spacing: -1px;
    opacity: 1;
  }
`;

export const Title = styled.h2`
  ${({ theme: { colors, devices } }) => css`
    display: flex;
    align-items: center;
    height: 50px;
    font-size: 32px;
    font-weight: 300;
    letter-spacing: -1px;
    color: ${colors.neutral.light};

    @media ${devices.tablet} {
      font-size: 28px;
    }
  `};
`;

export const Intro = styled.p`
  ${({ theme: { colors, devices } }) => css`
    font-size: 14px;
    font-weight: 600;
    text-align: justify;
    color: ${colors.neutral.main};

    @media ${devices.mobile} {
      text-align: center;
    }
  `};
`;

interface ITextProps {
  isScrollable?: boolean;
}

const enterText = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Text = styled.p<ITextProps>`
  ${({ theme: { colors, layout, devices }, isScrollable }) => css`
    /* main height minus all the margins and paddings used + post heading height */
    height: calc(
      ${layout.sizes.height.main} - ${layout.offsets.margin.main} -
        ${layout.offsets.padding.main} - ${postHeading.height} -
        ${postHeading.marginBottom} * 1.6
    );
    font-size: 14px;
    text-align: justify;
    line-height: 1.6;
    color: ${colors.neutral.main};
    padding-right: 20px;
    overflow-y: scroll;
    ${scrollbar()};

    @media ${devices.tablet} {
      height: calc(
        100vh - ${layout.offsets.margin.main} - ${layout.offsets.padding.main} -
          ${postHeading.height} - ${postHeading.marginBottom} * 1.6
      );
    }
  `};
`;
