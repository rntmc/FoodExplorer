import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 0;
  position: relative;

  > img {
    position: absolute;
    left: -70px;
    top: 42px;
    z-index: 1000;
  }

  > div {
    margin-top: 172px;
    padding-top:92px;
    padding-bottom:88px;
    padding-right: 100px;
    background-color: rgb(9,30,38, 100%);
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    border-radius: 8px;

    > h1 {
      font-family: ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM};
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    > span {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }
  }
`;