import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Main = styled.div`
  overflow-y: auto;
  margin-bottom: 0.437rem;
`;

export const Display = styled.div`
  display: grid;
  grid-template-columns: 31.25rem auto;
  grid-template-areas:
  "image top"
  "image bottom";
  align-items: center;
  padding: 0 7.5rem;
  margin-top: 2.25rem;
  margin-bottom: 2.5rem;
  
  @media(max-width:${DEVICE_BREAKPOINTS.MD}){
    display:flex;
    flex-direction:column;
    padding: 0 2.3rem;
    margin:0 2.3rem;
  }
  
  img {
    grid-area:image;
    height: 24.37rem;
    width: 24.37rem;
    border-radius: 50%;

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      height: 22rem;
      width: 22rem;
      border-radius: 50%;
    }
  }
  
  .top {
    grid-area: top;
    
    >h2 {
      font-size: ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM.fontFamily};
      font-weight:normal;
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      
      @media(max-width:${DEVICE_BREAKPOINTS.MD}){
        text-align:center;
        margin-top:1rem;
        font-size:2rem;
      }
    }
      
      >h3 {
        font-family: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR.fontFamily};
        font-weight:normal;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-bottom: 1.5rem;
      
      @media(max-width:${DEVICE_BREAKPOINTS.MD}){
        text-align:center;
        margin-top:1rem;
        font-size:1rem;
        padding:0 2.3rem;
      }
    }
  }
  
  .button {
    grid-area:bottom;
    width:130px;
    
    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      width:80%;
      margin-top:2rem;
    }
  }
  `;

  export const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem; 
    
    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      justify-content:center;
      gap: 0.4rem;
    }
  `;


export const QuantityToCart = styled.div`
  grid-area: bottom;
  display:grid;
  grid-template-columns: 112px auto;
  grid-template-areas: "qty btn";
  display: flex;
  align-items: center;
  margin-top: 3rem;
  width:100%;
    
  @media(max-width:${DEVICE_BREAKPOINTS.MD}){
    font-size: ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM.fontFamily};
    font-weight:normal;
    justify-content:center;
  }

  .quantity{
    grid-area:qty;
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 14px;
    font-size: ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM.fontFamily};
    font-size: 1.6rem;
    margin-right:14px;

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      gap: 2rem;
    }

    .subtract, .add {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    display: flex;
    align-items: center;
    justify-content:center;
    background: transparent;
    border: none;
    }

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      width:112px;
    }
  }

  .addToCart{
    grid-area:btn;
    font-size:0.85rem;
    width:11rem;

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      width:50%;
      border-radius:3px;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:1rem;
    }

    >svg{
      font-size: 1.6rem;
      display:none;
      
      @media(max-width:${DEVICE_BREAKPOINTS.MD}){
        display:block;
      }
    }
  }
`;
