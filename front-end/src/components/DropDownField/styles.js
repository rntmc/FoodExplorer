import styled from "styled-components";

export const Container = styled.div`
    width: 800px;

    > h2 {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
      font-weight: 400;
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      margin-bottom: 16px;
    }

    > select {
      width: 100%;
      background-color: ${({theme}) => theme.COLORS.DARK_800};
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      padding: 17px 16px;
      border: none;
      border-radius: 8px;

      > option {
        width: 100%;
        text-align: start;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};
      }
    }

`;