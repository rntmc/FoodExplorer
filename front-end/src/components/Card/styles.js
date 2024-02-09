import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  max-width: 19rem;
  height: 28.8rem;
  background-color: ${({theme}) => theme.COLORS.DARK_200};
  border-radius: 8px;
  position: relative;

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){

  }
`;

export const Icon = styled.button`
  font-size: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  background: transparent;
  border: none;

  svg {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
`;

export const Plate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;

  > img {
    height: 11rem;
    width: 11rem;
    margin-top: ${props => props.hasCount ? '1.5rem' : '3.5rem'};
    border-radius: 50%;
  }

  .title {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    
    strong {
      font-family:${({ theme }) => theme.FONTS.POPPINS_300_BOLD.fontFamily};
      font-size: 1.5rem;
      font-weight: bold;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
      text-decoration: none;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  > p {
    text-align: center;
    margin-top: 1rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR.fontFamily};
    font-size: 0.875rem;
    font-weight:300;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  > span {
    margin-top: 1rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIGGEST_REGULAR.fontFamily};
    font-size:2rem;
    color: ${({theme}) => theme.COLORS.CAKE_200};
  }
`;

export const Count = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  margin-top: 1rem;
  padding: 0 3rem;

  .subtract, .add {
    font-size: 1.125rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
  }

  > strong {
    font-size: 1.25rem;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD.fontFamily};
  }
`;
