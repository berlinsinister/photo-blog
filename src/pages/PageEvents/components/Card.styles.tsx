import styled, { css, keyframes } from 'styled-components';

const enterCardWrapper = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardWrapper = styled.div`
  ${({ theme: { colors, devices, number } }) => css`
    flex: 0 0 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${colors.neutral.lightest};
    border-bottom: 3px solid ${colors.primary.main};
    opacity: 0;
    transform: translateY(50px);
    animation: ${enterCardWrapper} 0.4s ease-out ${number * 0.2}s forwards;

    // what is this description for?
    /* for smooth opacity change while scrolling up / down */
    /* parent element's opacity is set by animation 'enterWrapper'
     * and isn't overridden by js while scrolling.
     * that's why this feature (opacity change while scrolling)
     * was moved to this element.
     */

    transition: 0.4s ease; // ?

    &:hover {
      .day-first {
        opacity: 0;
        transform: translateY(-100px);
      }

      .day-second {
        opacity: 1;
        transform: translateY(0);
      }

      .month {
        transform: translateY(10px);
      }
    }
  `}
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
`;

export const DayWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 55px;
  overflow: hidden;
  border: 2px solid blue;
`;

export const DayFirst = styled.p`
  ${({ theme: { colors, devices } }) => css`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 60px;
    font-weight: 500;
    color: ${colors.neutral.primary};
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
    // border: 2px solid red;
    transition: 0.4s ease;
  `}
`;

export const Info = styled.div`
  ${({ theme: { colors, devices } }) => css`
    // border: 1px solid red;
    font-weight: 300;
    color: ${colors.neutral.primary};
  `}
`;

export const Title = styled.h3`
  ${({ theme: { colors, devices } }) => css`
    margin-bottom: 20%;
    font-size: 18px;
    font-weight: 300;
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
