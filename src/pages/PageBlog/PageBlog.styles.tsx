import styled, { css } from 'styled-components';

export const MainDiv = styled.div`
  ${({ theme: { colors } }) => css`
    height: 200px;
    margin-top: 200px;
    background-color: white;
    border: 1px solid red;
  `};
`;
