import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  grid-area: banner;
  background-color: rgb(9, 30, 38, 100%);
  margin: 144px 124px 8px;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;


  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    position: relative;
    display: grid;
    grid-template-areas:
      "image text1"
      "image text2";
    height: 120px;
    border-radius: 8px;
    padding: 1.5rem 1.6rem;
    margin: 3rem 2.3rem ;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    position: relative;
    display: grid;
    grid-template-areas:
      "image text1"
      "image text2";
    height: 90px;
    border-radius: 8px;
    padding: 1rem 1rem;
    margin: 2.6rem 2.3rem ;
  }

  .bg {
    z-index: 10;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: left;
    margin-left: auto; 
    padding-right: 6.25rem;
    padding-left:32rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      padding-left: 12rem;
      padding-right: 0;
      }
    
    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
      padding-left: 8.4rem;
      padding-right: 0;
    }

    > h1 {
      font-family: ${({theme}) => theme.FONTS.POPPINS_500_MEDIUM.fontFamily};
      font-size: 2.5rem;
      font-weight:500;

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        grid-area: text1;
        font-size: 1.6rem;
        word-wrap: break-word;
      }

      @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
        grid-area: text1;
        font-size: 1.5rem;
      }
    }

    > span {
      font-family: ${({theme}) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
      font-size: 1rem;
      font-weight:300;

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        grid-area: text2;
        font-size: 1rem;
        word-wrap: break-word;
        font-size: 1rem;
      }

      @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
        grid-area: text2;
        font-size: 1rem;
      }
    }
  }
`;

export const BannerImage = styled.img`
  position:absolute;
  height: 412px;
  width:656px;
  top: -144px;
  left:-70px;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    grid-area: image;
    position: absolute;
    height: 150px;
    width: 190px;
    top: -43px;
    left:-46px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    grid-area: image;
    position: absolute;
    height: 116px;
    width: 140px;
    top: -34px;
    left:-32px;
  }

`;