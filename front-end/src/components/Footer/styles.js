import styled from "styled-components";

export const Container = styled.footer`
  height: 76px;
  width: 100%;

  display: flex;
  justify-content:space-between;
  align-items: center;

  padding: 24px 124px;

  background-color: ${({theme}) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    gap: 10px;

    > svg {
      font-size: 30px;
      color: ${({theme}) => theme.COLORS.LIGHT_700};
    }

    > span {
      font-size: 24px;
      color: ${({theme}) => theme.COLORS.LIGHT_700};
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD};
    }
  }

  > p {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.LIGHT_200};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};
  }
`;