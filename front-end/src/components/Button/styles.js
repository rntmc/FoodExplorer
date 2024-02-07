import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  height: 3rem;
  border: 0;
  padding: 0 1.5rem;
  border-radius: 5px;

  &:disabled {
    opacity: 0.5;
  }

  &.delete {
    background-color: ${({theme}) => theme.COLORS.DARK_800};
    width: 135px;
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      width: 160px;
    }
  }

  &.save {
    background-color: ${({theme}) => theme.COLORS.TOMATO_400};
    width: 172px;
  }
`;