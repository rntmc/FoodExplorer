import styled from "styled-components";

export const Container = styled.div`
  width: 304px;
  height: 462px;

  background-color: ${({theme}) => theme.COLORS.DARK_200};
  border-radius: 8px;
  position: relative;
`;

export const Icon = styled.button`
  font-size: 32px;
  display: flex;
  align-self: center;
  justify-self: end;

  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;

  background: transparent;
  border: 0;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
`;

export const Plate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 24px;

  > img {
    height: 176px;
    width: 176px;

    margin-top: 24px;

    border-radius: 50%;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 16px;

    > h1 {
      font-family: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    > svg {
      font-size: 30px;
    }
  }

  > p {
    margin-top: 16px;

    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  > span {
    margin-top: 16px;

    font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIGGEST_REGULAR};
    color: ${({theme}) => theme.COLORS.CAKE_200};
  }
`;

export const Count = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  margin-top: 16px;
  padding: 0 48px;

  .subtract, .add {
    font-size: 18px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
  }

  > strong {
    font-size: 20px;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD};
  }
`;