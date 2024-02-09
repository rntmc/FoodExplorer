import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  @media(max-width:${DEVICE_BREAKPOINTS.MD}){
    width:100%;
  }
`;

export const Main = styled.div`
  padding: 0 7.75rem;
  margin-bottom: 5.375rem;

  @media(max-width:${DEVICE_BREAKPOINTS.MD}){
    padding: 2.3rem 2.3rem;
  }

  h1 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontFamily};
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    margin-bottom: 2rem;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      display:flex;
      flex-direction:column;
      width:100%;
      align-items: center;
      justify-content:center;
    }
  }

  .center {
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 2rem;
    margin-top: 2rem;

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      display:flex;
      flex-direction:column;
    }

    .tags {
      width: 100%;
      padding: 0.5rem 1rem;
      display: flex;
      flex-wrap:wrap;
      gap: 1rem;
      border-radius: 0.5rem;
      background-color: ${({theme}) => theme.COLORS.DARK_800};

      @media(max-width:${DEVICE_BREAKPOINTS.MD}){
        display: flex;
        align-items:center;
      }
    }

    .ingredients {
      width: 400%;

      @media(max-width:${DEVICE_BREAKPOINTS.MD}){
        width:100%;
      }
    }
  }

  .textarea{
    width:100%;
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: end;
    gap:2rem;
    
    > Button {
    background-color: ${({theme}) => theme.COLORS.TOMATO_400};
    width: 12rem;

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      padding:0.8rem 0;
      border-radius:3px;
      width:100%;
    }
    }
  }
  
`;

