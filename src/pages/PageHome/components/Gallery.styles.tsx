import styled, { css, keyframes } from 'styled-components';

export const ContentWrapper = styled.div`
  ${({ theme: { colors, layout, devices } }) => css`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${colors.neutral.main};
    z-index: 1;
  `};
`;

export const CloseWrapper = styled.div`
  ${({ theme: { colors, devices } }) => css`
    position: absolute;
    top: 40px;
    right: 100px;

    @media ${devices.laptop} {
      top: 20px;
      right: 20px;
    }
  `};
`;

interface INavLineWrapperProps extends React.HTMLProps<HTMLDivElement> {
  style?: React.CSSProperties;
  isRight?: boolean;
}

const enterNavLineWrapper = keyframes`
  to {
    transform: translateX(0);
  }
`;

export const NavLineWrapper = styled.div<INavLineWrapperProps>`
  ${({ theme: { devices }, isRight }) => css`
    position: absolute;
    top: 45%;
    ${isRight
      ? css`
          right: 100px;
          transform: translateX(500px);
        `
      : css`
          left: 100px;
          transform: translateX(-500px);
        `};
    display: flex;
    justify-content: ${isRight ? 'flex-end' : 'flex-start'};
    width: 180px;
    padding: 20px;
    transition: 0.2s ease-out;
    animation: ${enterNavLineWrapper} 0.5s ease-out 1s forwards;

    /* border: 1px solid red; */

    @media ${devices.laptop} {
      top: 90%;
      ${isRight
        ? css`
            right: 0;
          `
        : css`
            left: 0;
          `};
    }

    @media ${devices.mobile} {
      width: 140px;
      padding: 20px 0;
    }
  `};
`;

interface INavLineProps {
  lw?: number;
  rw?: number;
  isRight?: boolean;
}

export const NavLine = styled.div<INavLineProps>`
  ${({ theme: { colors, devices }, lw, rw, isRight }) => css`
    width: ${isRight ? rw : lw}px;
    height: 1px;
    background-color: #fff;
    transition: 0.2s ease-out;
  `};
`;

const enterPhotoWrapper = keyframes`
  to {
    opacity: 1;
  }
`;

export const PhotoWrapper = styled.div`
  ${({ theme: { colors, devices } }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 70%;
    opacity: 0;
    animation: ${enterPhotoWrapper} 0.3s ease-out 0.3s forwards;

    /* border: 1px solid lime; */

    @media ${devices.laptop} {
      width: 100%;
    }

    @media ${devices.mobile} {
      height: 50%;
    }
  `};
`;

export const Hint = styled.p`
  position: absolute;
  top: -30px;
  font-size: 15px;
  font-weight: 300;
  font-style: italic;
  color: #fff;
`;

interface IPhotoProps {
  src: string;
}

export const Photo = styled.img.attrs<IPhotoProps>(({ src }) => ({ src }))`
  ${({ theme: { colors, devices } }) => css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `};
`;

export const Pagination = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  gap: 20px;
`;

interface IBulletProps {
  isActive?: boolean;
}

export const Bullet = styled.span<IBulletProps>`
  ${({ isActive }) => css`
    ${isActive
      ? css`
          margin: 0 20px;
          background-color: rgba(255, 255, 255, 1);
        `
      : css`
          background-color: rgba(255, 255, 255, 0.5);
        `};
    width: 4px;
    height: 4px;
    border-radius: 100%;
    transition: 0.4s ease-out;
  `};
`;
