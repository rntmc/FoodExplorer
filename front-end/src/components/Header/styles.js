import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  grid-area:header;
  height: 104px;
  width: 100%;
  
  display: grid;
  grid-template-columns: 196px auto 216px 32px;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 7.75rem;
  background-color: ${({theme}) => theme.COLORS.DARK_600};

  @media(max-width:${DEVICE_BREAKPOINTS.MD}){
    grid-area:header;
    height: 104px;
    width: 100%;
    display: grid;
    grid-template-columns: 30px auto 30px;
    align-items: center;
    padding: 2.3rem 2.3rem;
  }

  .top-input {
    > icon {
      margin-left: 3.125rem;
    }

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      display:none;
    }
  }

  .top-button {
    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      display:none;
    }
  }

  .order-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      display:none;
    }
    
    > svg {
      font-size: 1.625rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    height: 7.125rem;
    width: 100%;
  }
`;

export const Logout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;

  background-color: ${({theme}) => theme.COLORS.DARK_600};
  border: none;

  > svg {
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  @media(max-width:${DEVICE_BREAKPOINTS.MD}){
    display:none;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    color: ${({theme}) => theme.COLORS.CAKE_100};
    font-size: 2rem;
    margin-right: 0.625rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
      display:flex;
      flex-direction:row;
      gap: 0.5rem;
    }
    
    > span {
      font-size: 1.5rem;
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD.fontFamily};

      @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
        align-items:center;
      }
    }
    
    .user {
      display:none;
    }
    > strong {
      font-size: 0.75rem;
      color: ${({theme}) => theme.COLORS.CAKE_200};
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR.fontFamily};
      align-self: flex-end;
      text-transform: capitalize;
      @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
        align-self:center;
      }
    }
  }
`;

export const Menu = styled.button`
  background-color:  transparent;
  border: none;
  display: none;

  > svg {
    font-size: 2.5rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    display: block;
  }
`;

export const OrderSummary = styled.button`
  display: none;

  @media(max-width:${DEVICE_BREAKPOINTS.MD}){
    display:block;
    border:none;
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 2.4rem;
    display: flex;
    align-items:center;
    justify-content:center;

    >svg {
      position: absolute
    }

    >p {
      font-size:1rem;
      position: relative;
      padding:3px;
      background-color: ${({theme}) => theme.COLORS.TOMATO_100};
      border-radius:50%;
      top: -9px;
      right: -10px;
    }
  }
`;