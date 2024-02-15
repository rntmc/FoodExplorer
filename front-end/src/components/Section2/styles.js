import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.section`
  > h2 {
    margin-bottom: 1.5rem;
    margin-top: 2.375rem;
    font-family: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontFamily};
    font-weight: 400;
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    h2:first-child {
      margin-top:40px;
    }
  }
`;