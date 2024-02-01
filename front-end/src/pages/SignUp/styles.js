import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 476px;
  height: 620px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 140px;
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  border-radius: 16px;
  padding: 64px;

  > h1 {
    font-size: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontSize};
    margin-bottom: 16px;
  };

  > p {
    font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontSize};
    align-self:flex-start;
    margin-bottom: 8px;
    margin-top: 16px;
  }

  > a {
    text-decoration: none;
    margin-top: 32px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontSize};
  }

  > Input {
    padding: 0;
  }

  > Button {
    margin-top: 32px;
  }
`;

export const Logo = styled.div`
  display:flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;

  > svg {
    font-size: 50px;
    color: ${({theme}) => theme.COLORS.CAKE_100};
  }

  > h2 {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD.fontFamily};
      font-size: ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD.fontSize};
      font-weight: ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD.fontWeight};
  }
`;