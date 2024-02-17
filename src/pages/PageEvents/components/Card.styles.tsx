import styled, { css, keyframes } from 'styled-components';

const enterWrapper = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  ${({ theme: { devices, number } }) => css`
    position: relative;
    min-width: 30%;
    /* for responsive height */
    padding-top: 37%;
    opacity: 0;
    transform: translateY(50px);
    animation: ${enterWrapper} 0.4s ease-out ${number * 0.2}s forwards;

    @media ${devices.tablet} {
      min-width: 0;
      width: 80%;
      padding-top: 250px;
    }
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme: { colors, devices } }) => css`
    /* to override padding-top % from wrapper div */
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 30px;
    border: 1px solid ${colors.neutral.lightest};
    border-bottom: 3px solid ${colors.primary.main};

    /* for smooth opacity change while scrolling up / down */
    /** parent element's opacity is set by animation 'enterWrapper'
      and isn't overridden by js while scrolling.
      that's why this feature (opacity change while scrolling)
      was moved to this element.
    */

    transition: 0.4s ease;

    &:hover {
      .day-first {
        opacity: 0;
        transform: translateY(-100px);
      }

      .day-second {
        opacity: 1;
        transform: translateY(0);
      }

      .info {
      }
    }
  `}
`;

export const Date = styled.div``;

export const DayWrapper = styled.div`
  position: relative;
  height: 70px;
  overflow: hidden;

  border: 1px solid blue;
`;

export const DayFirst = styled.p`
  ${({ theme: { colors, devices } }) => css`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 70px;
    font-weight: 500;
    color: ${colors.neutral.primary};
    border: 1px solid lime;
    transition: 0.4s ease;
  `}
`;

export const DaySecond = styled(DayFirst)`
  ${({ theme: { colors, devices } }) => css`
    font-weight: 600;
    color: ${colors.primary.main};
    opacity: 0;
    transform: translateY(100px);
  `}
`;

export const Month = styled.p`
  ${({ theme: { colors, devices } }) => css`
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${colors.neutral.primary};
  `}
`;

export const Info = styled.div`
  ${({ theme: { colors, devices } }) => css`
    color: ${colors.neutral.primary};
  `}
`;

export const Title = styled.h3`
  ${({ theme: { colors, devices } }) => css`
    margin-bottom: 20%;
    font-size: 20px;
    text-transform: uppercase;

    @media ${devices.laptop} {
      margin-bottom: 0;
    }
  `}
`;

export const Location = styled.p`
  ${({ theme: { colors, devices } }) => css`
    font-size: 18px;
  `}
`;
