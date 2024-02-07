import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width:100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 104px 406px auto 77px;
  grid-template-areas:
  "header"
  "banner"
  "content"
  "footer";
  background-color: ${({theme}) => theme.COLORS.DARK_400};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width:100%;
    grid-template-columns: 100%;
    grid-template-rows: auto 120px 1fr auto;

    grid-template-areas:
    "header"
    "banner"
    "content"
    "footer"
  }
`;
export const Main = styled.div`
  grid-area:"content";
  width:100%;
`;

export const Links = styled.div`
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.75rem;

  > li {
    a {
      color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
  }
`;
