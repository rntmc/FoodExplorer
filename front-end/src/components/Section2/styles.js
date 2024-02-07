import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  overflow-y: auto;
  padding: 0 7.75rem;
  margin-top: 2.375rem;

  > h2 {
    margin-bottom: 1.5rem;
    font-family: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontFamily};
    font-weight: 400;
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    padding: 0 2.2rem;
    margin-top: 5rem;
  }
`;