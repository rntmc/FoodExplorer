import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width:100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 104px 406px auto 77px;
  grid-area:
  "header"
  "banner"
  "content"
  "footer";
  background-color: ${({theme}) => theme.COLORS.DARK_400};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: auto;
    grid-template-rows: 114px auto 77px;

    grid-template-areas:
    "header"
    "main"
    "footer"
  }
`;
export const Main = styled.div`
  grid-area:"content";
`;

export const Links = styled.div`
  overflow-y: auto;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 28px;

  > li {
    a {
      color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
  }
`;
