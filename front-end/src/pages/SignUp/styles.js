import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width:${DEVICE_BREAKPOINTS.MD}){
    display:grid;
    grid-template-areas:
    "logo"
    "form";
  }
`;

export const Form = styled.form`
  width: 29.75rem;
  height: 38.75rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-right: 8.75rem;
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  border-radius: 16px;
  padding: 4rem;

  @media(max-width:${DEVICE_BREAKPOINTS.MD}){
    grid-area:form;
    margin-right:0;
    margin-top: -8rem;
    margin-right: 0;
    background-color:transparent;
    padding: 0 4rem;
  }

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontFamily};
    font-size: 2rem;
    font-weight:400;
    margin-bottom: 1rem;

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      display:none;
    }
  };

  > p {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
    font-size: 1rem;
    font-weight: 300;
    align-self:flex-start;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  > a {
    text-decoration: none;
    margin-top: 2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontSize};
  }

  > Input {
    padding: 0;
  }

  > Button {
    margin-top: 2rem;
  }
`;

export const Logo = styled.div`
  display:flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  @media(max-width:${DEVICE_BREAKPOINTS.MD}){
    grid-area:logo;
    display:flex;
    align-items:center;
    justify-content:start;
    margin-top:5rem;
    padding: 0 4rem;
    margin-bottom:4rem;
  }

  > svg {
    font-size: 3.125rem;
    color: ${({theme}) => theme.COLORS.CAKE_100};
  }

  > h2 {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD.fontFamily};
      font-size: 2.62rem;
      font-weight: bold;
  }
`;