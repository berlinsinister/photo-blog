import styled, { css, keyframes } from 'styled-components';

const enterWrapper = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface IWrapperProps {
  isFirst?: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  ${({ theme: { devices, number, isLocatedOnRight }, isFirst }) => css`
    position: relative;
    width: 50%;
    /* for responsive height */
    padding-top: 35%;

    /** was causing an error on showing the <Gallery /> - 
        moving these elements 50px up.
        replaces by: top: ${isFirst ? '0' : '-50px'};
    */
    /* margin-top: -50px;
    &:first-of-type {
      margin-top: 0px;
    } */

    top: ${isFirst ? '0' : '-50px'};

    ${isLocatedOnRight && `align-self: flex-end`};

    /* border: 1px solid mediumseagreen; */

    opacity: 0;
    transform: translateY(50px);
    animation: ${enterWrapper} 0.4s ease-out ${number * 0.2}s forwards;

    @media ${devices.tablet} {
      width: 100%;
      /* margin-top: 0; */
      top: 0;
      padding-top: 200px;
    }
  `}
`;

export const ContentWrapper = styled.div`
  /* to override padding-top % from wrapper div */
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;

  /* for smooth opacity change while scrolling up / down */
  /** parent element's opacity is set by animation 'enterWrapper'
      and isn't overridden by js while scrolling.
      that's why this feature (opacity change while scrolling)
      was moved to this element.
  */
  transition: 0.4s ease;

  /* border: 1px solid red; */
`;

/* ***** photo */
export const PhotoWrapper = styled.div`
  ${({ theme: { colors, devices, isLocatedOnRight } }) => css`
    /* for photo div */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    /* width: 50%; */
    width: 60%;
    /* ${isLocatedOnRight && `width: 77%`}; */
    height: 100%;
    border-bottom: 3px solid ${colors.primary.main};
    background-color: #000;
    overflow: hidden;

    /* border: 1px solid blue; */

    :hover {
      .image {
        scale: 1.1;
        opacity: 0.4;
      }
      .copyright,
      .year {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media ${devices.tablet} {
      width: 80%;
    }
  `}
`;

interface IPhotoProps {
  image: string;
}

export const Photo = styled.div<IPhotoProps>`
  ${({ image }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.2s ease-out;
  `}
`;

export const Copyright = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
  color: #fff;
  opacity: 0;
  user-select: none;
  transform: translateY(-5px);
  transition: 0.2s ease-out;
`;

export const Year = styled(Copyright)`
  transform: translateY(5px);
`;

/* ***** info */
export const InfoWrapper = styled.div`
  ${({ theme: { colors, devices } }) => css`
    /* for number p */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    margin-left: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: ${colors.neutral.main};

    /* border: 1px solid lime; */

    @media ${devices.tablet} {
      width: 20%;
    }
  `};
`;

export const Number = styled.p`
  ${({ theme: { colors, devices } }) => css`
    position: absolute;
    top: -50px;
    left: 0;
    font-family: 'Markazi Text', serif;
    font-size: 100px;
    font-weight: 400;
    color: ${colors.neutral.lightest};

    @media ${devices.laptop} {
      top: -20px;
      font-size: 48px;
    }
  `};
`;

export const Title = styled.p`
  /* for placing in center */
  margin-top: auto;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Link = styled.a`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 5px;
    /* for placing in center */
    margin-bottom: auto;
    text-decoration: none;
    &:hover {
      color: ${colors.primary.main};
      cursor: pointer;
      #see-more {
        background-color: ${colors.neutral.main};
        /* transform: translateX(5px); */
        width: 40px;
      }
    }
  `};
`;

export const Line = styled.span`
  ${({ theme: { colors } }) => css`
    width: 20px;
    height: 1px;
    background-color: ${colors.primary.main};
    transition: 0.2s ease-out;
  `};
`;

export const Pagination = styled.div`
  ${({ theme: { colors, devices } }) => css`
    margin-bottom: 20px;
    color: ${colors.neutral.aux};

    @media ${devices.tablet} {
      margin-bottom: 10px;
    }
  `};
`;
