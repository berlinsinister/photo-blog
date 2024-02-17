import styled, { css, keyframes } from 'styled-components';
import { scrollbar } from '../../styles';

export const ContentWrapper = styled.div`
  ${({ theme: { layout, devices } }) => css`
    max-height: calc(${layout.sizes.height.main});
    overflow: hidden;

    @media ${devices.tablet} {
      max-height: none;
      height: 100vh;
      overflow: auto;
      ${scrollbar()};
    }
  `};
`;

export const Main = styled.main`
  ${({ theme: { layout, devices } }) => css`
    display: flex;

    @media ${devices.tablet} {
      flex-direction: column;
      margin-top: ${layout.offsets.margin.main};
    }
  `};
`;

const enterPhoto = keyframes`
  to {
    opacity: 1;
  }
`;

interface IPhotoProps {
  isFirstRender: boolean;
  image: string;
}

export const Photo = styled.div<IPhotoProps>`
  ${({ theme: { layout, devices }, isFirstRender, image }) => css`
    position: relative;
    width: 70%;
    height: calc(${layout.sizes.height.main});
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
    animation: ${enterPhoto} ${isFirstRender ? '0.4s' : '0.2s'} ease-out
      ${isFirstRender ? '1s' : '0.15s'} forwards;

    @media ${devices.laptop} {
      width: 65%;
    }

    @media ${devices.tablet} {
      width: 100%;
      height: 450px;
    }

    @media ${devices.tablet} {
      height: 350px;
    }
  `}
`;

export const NavigationWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:first-of-type {
    padding: 0 20px 0 30px;
  }

  &:last-of-type {
    padding: 0 30px 0 20px;
  }
`;

export const PageNum = styled.p`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  opacity: 1;
`;

export const OffersWrapper = styled.div`
  ${({ theme: { layout, devices } }) => css`
    width: 30%;
    margin-top: ${layout.offsets.margin.main};

    @media ${devices.laptop} {
      width: 35%;
    }

    @media ${devices.tablet} {
      width: 100%;
      margin-top: 0;
    }
  `};
`;

const enterTitle = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Title = styled.h2`
  ${({ theme: { colors, devices } }) => css`
    font-size: 32px;
    font-weight: 300;
    text-align: center;
    letter-spacing: -1px;
    color: ${colors.neutral.light};
    opacity: 0;
    transform: translateY(-20px);
    animation: ${enterTitle} 0.4s ease-out 1.7s forwards;

    @media ${devices.tablet} {
      display: none;
    }
  `};
`;

const enterDescription = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Description = styled.p`
  ${({ theme: { colors, devices } }) => css`
    width: 75%;
    margin: 20px auto 30px;
    font-size: 14px;
    line-height: 1.6;
    text-align: center;
    color: ${colors.neutral.main};
    opacity: 0;
    transform: translateY(20px);
    animation: ${enterDescription} 0.4s ease-out 1.7s forwards; /*2.7*/

    @media ${devices.tablet} {
      margin: 20px auto 0;
      opacity: 1;
      animation: none;
    }
  `};
`;

export const OfferItemWrapper = styled.div`
  ${({ theme: { layout, devices } }) => css`
    position: relative;
    display: flex;
    align-items: center;

    @media ${devices.tablet} {
      justify-content: space-between;
      width: 80%;
      margin: 0 auto;
      padding: ${layout.offsets.padding.main} 0;
    }
  `};
`;

interface IArrowWrapperProps extends React.HTMLProps<HTMLDivElement> {
  style?: React.CSSProperties;
}

export const ArrowWrapper = styled.div<IArrowWrapperProps>`
  ${({ theme: { devices } }) => css`
    position: absolute;
    left: calc((100% - 60%) / 2);

    @media ${devices.tablet} {
      /* reset position absolute */
      position: static;
      padding: 20px;
      cursor: pointer;
      transition: 0.2s ease-out;

      &:first-of-type:hover {
        transform: translate(-5px);
      }

      &:last-of-type:hover {
        transform: translate(5px);
      }
    }
  `};
`;

interface IOfferItemProps {
  idx: number;
  isActive?: boolean;
}

export const OfferItem = styled.div<IOfferItemProps>`
  ${({ theme: { colors, devices }, idx, isActive }) => css`
    width: 60%;
    margin: 0 auto;
    padding: 15px;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
    color: ${colors.neutral.light};
    ${isActive &&
    css`
      border-top: 1px solid ${colors.neutral.lightest};
      border-bottom: 1px solid ${colors.neutral.lightest};
      color: ${colors.neutral.main};
    `};
    opacity: 1;
    cursor: pointer;
    transition: 0.2s ease-out;
  `};
`;
