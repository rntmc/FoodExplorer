import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 104px auto 77px;
  grid-area:
  "header"
  "main"
  "footer";

  background-color: ${({theme}) => theme.COLORS.DARK_400};
`;

export const Main = styled.main`
  padding: 0 124px;
  overflow-y: auto;
`;

export const Links = styled.ul`
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
