import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  justify-content: center;
  
`;

export const Form = styled.form`
  width: 476px;
  height: 540px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 140px;
  margin-top: 100px;
  
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  border-radius: 16px;
  padding: 64px;


  > h1 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM}
    font-size: 32px;
    font-weight:400;
    margin-bottom: 16px;
  };

  > p {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    font-size: 16px;
    font-weight: 300;
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