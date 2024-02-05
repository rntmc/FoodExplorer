import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Display = styled.div`
  display: grid;
  grid-template-columns: 500px auto;
  padding: 0 120px;
  margin-top: 36px;
  margin-bottom: 40px;

  > img {
    height: 390px;
    width: 390px;
    border-radius: 50%;
  }
  
  > div h2{
    font-size: ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM};
    font-weight:500;
    font-size: 40px;
    margin-bottom: 24px;
    margin-top: 30px;
  }

  > div h3 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR};
    font-weight:500;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 24px;
  }

  > div .bottom {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 48px;
    gap: 14px;

    > svg {
      font-size: 30px;
    }

    > strong {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD};
    }

    &:last-child {
      width: 320px;
    }

    .subtract, .add {
    font-size: 18px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: transparent;
    border: 0;
    }

    .add {
      margin-right: 16px;
    }
  }

  > div .button {
    margin-top: 48px;
    display: flex;
    width: 130px;
    }
`;