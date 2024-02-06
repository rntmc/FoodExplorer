import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(9,30,38, 100%);
  margin: 144px 124px 8px;
  border-radius: 8px;
  position: relative;
  display: flex; 
  align-items: center;

  > img {
    position: absolute;
    top: -144px;
    left: -70px;
  }

  > div {
    display: flex;
    flex-direction:column;
    align-items:start;
    justify-content: center;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    height: 100%;
    padding-left: 680px;

    > h1 {
      font-family: ${({theme}) => theme.FONTS.POPPINS_500_MEDIUM.fontFamily};
      font-size: 40px;
      font-weight:500;
    }

    > span {
      font-family: ${({theme}) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
      font-size: 16px;
      font-weight:300;
    }
  }
`;