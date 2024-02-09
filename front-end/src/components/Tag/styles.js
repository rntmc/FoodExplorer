import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.span`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontFamily};
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  margin-right: 0.75rem;

  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  @media(max-width:${DEVICE_BREAKPOINTS.MD}){
    margin: 0 0.5rem;
  }

`;