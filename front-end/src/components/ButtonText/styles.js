import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  background: none;
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  border: none;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD.fontFamily};
  font-size:1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 7.75rem;

  > svg {
    font-size: 2rem;
  }

  @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      padding: 2.3rem 2.3rem 0 2.3rem;
    }
`;