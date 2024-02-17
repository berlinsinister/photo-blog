import styled, { css, keyframes } from 'styled-components';

const enterMobileNavWrapper = keyframes`
  to {
    opacity: 1;
  }
`;

export const MobileNavWrapper = styled.div`
  ${({ theme: { layout, devices } }) => css`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(15px);
    opacity: 0;
    z-index: 5;
    animation: ${enterMobileNavWrapper} 0.4s ease-out forwards;
  `};
`;

export const MobileNav = styled.nav`
  ${({ theme: { layout, devices } }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `};
`;

export const CloseWrapper = styled.div`
  ${({ theme: { layout, devices } }) => css`
    align-self: center;
    margin-bottom: 20px;
  `};
`;

type MobileNavLinkProps = {
  isActive?: boolean;
};

export const MobileNavLink = styled.a<MobileNavLinkProps>`
  ${({ theme: { colors }, isActive }) => css`
    width: 70vw;
    padding: 10px 0;
    border-bottom: 1px solid ${isActive ? colors.primary.main : 'transparent'};
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    color: ${colors.neutral.main};
    cursor: pointer;
    /* transition: 0.4s ease-out; */
  `};
`;
