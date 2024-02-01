import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  > h2 {
    margin-bottom: 16px;

    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    font-weight: 400;
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
`;