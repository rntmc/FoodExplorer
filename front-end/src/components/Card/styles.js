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
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  background: transparent;
  border: none;

  svg {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
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
    margin-top: ${props => props.hasCount ? '24px' : '56px'};
    border-radius: 50%;
  }

  .title {
    display: flex;
    align-items: center;
    margin-top: 16px;
    
    strong {
      font-family:${({ theme }) => theme.FONTS.POPPINS_300_BOLD.fontFamily};
      font-size: 24px;
      font-weight: bold;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
      text-decoration: none;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }


  > p {
    text-align: center;
    margin-top: 16px;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR.fontFamily};
    font-size: 14px;
    font-weight:300;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
