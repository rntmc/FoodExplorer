import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 800px;

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      width:100%;
    }

    > h2 {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
      font-weight: 400;
      font-size: 1.25rem;
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      margin-bottom: 1rem;
    }

    > select {
      width: 100%;
      background-color: ${({theme}) => theme.COLORS.DARK_800};
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      padding: 1.06rem 1rem;
      border: none;
      border-radius: 0.5rem;

      > option {
        width: 100%;
        text-align: start;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR.fontFamily};
      }
    }

`;