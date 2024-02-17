import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  ${({ theme: { layout, devices, isOffers } }) => css`
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: ${layout.sizes.width.main};
    width: 100%;
    height: 100px;
    padding: 0 ${layout.offsets.padding.main} 0 120px;
    z-index: 1;
    overflow: hidden;
    transition: 0.2s ease-out;

    @media ${devices.laptop} {
      padding: 0 ${layout.offsets.padding.main};
    }

    @media ${devices.tablet} {
      top: 0;
      height: 80px;
    }
  `};
`;

export const Logo = styled.p`
  ${({ theme: { colors, devices, navWidth, isOffers, isMystery } }) => css`
    width: 150px;
    font-family: 'Playfair Display SC', serif;
    font-size: 32px;
    white-space: nowrap;
    color: ${colors.neutral.main};
    cursor: pointer;
    transition: 0.7s ease-in-out;

    ${isOffers &&
    css`
      text-align: right;
      /* 150 is logo width and nav paddings from left and right */
      transform: translate(${navWidth - 150 - 120 - 50}px);
    `};

    ${isMystery &&
    css`
      color: #fff;
    `}

    @media ${devices.laptop} {
      ${isOffers &&
      css`
        transform: translate(${navWidth - 150 - 50 - 50}px);
      `};
    }
  `};
`;

export const NavLinksWrapper = styled.section`
  ${({ theme: { devices, isOffers, isMystery } }) => css`
    display: flex;
    transition: 0.7s ease-in-out;

    ${isOffers &&
    css`
      /* position: absolute; */
      /* right: 0; */
      opacity: 0;
      transform: translate(700px);
    `};

    ${isMystery &&
    css`
      display: none;
    `}

    @media ${devices.tablet} {
      ${isOffers &&
      css`
        /* opacity: 1; */
        /* transform: translate(0); */
      `};
    }
  `};
`;

interface INavLinkProps {
  isActive?: boolean;
}

export const NavLink = styled.a<INavLinkProps>`
  ${({ theme: { colors, devices, isBlog }, isActive }) => css`
    padding: ${isBlog ? '10px 20px' : '10px 30px'};
    border-bottom: 1px solid ${isActive ? colors.primary.main : 'transparent'};
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none;
    color: ${colors.neutral.main};
    cursor: pointer;
    transition: 0.4s ease-out;
    &:last-of-type {
      border-bottom: 1px solid
        ${isActive ? colors.primary.main : colors.neutral.light};
    }

    @media ${devices.laptop} {
      padding: ${isBlog ? '10px 20px' : '10px 25px'};
    }
  `};
`;
