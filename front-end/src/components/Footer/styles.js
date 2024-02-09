import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  grid-area:footer;
  bottom: 0;
  width: 100%;
  height: 76px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 1.5rem 7.75rem;
  background-color: ${({theme}) => theme.COLORS.DARK_600};
  margin-top: 3rem;

  @media (max-width:${DEVICE_BREAKPOINTS.MD}){
    padding: 1.5rem 2.2rem;
  }

  > div {
    display: flex;
    gap: 0.625rem;

    > svg {
      font-size: 1.875rem;
      color: ${({theme}) => theme.COLORS.LIGHT_700};
    }

    > span {
      font-size: 1.5rem;
      color: ${({theme}) => theme.COLORS.LIGHT_700};
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD.fontFamily};
    }
  }

  > p {
    font-size: 0.875rem;
    color: ${({theme}) => theme.COLORS.LIGHT_200};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR.fontFamily};
  }
`;