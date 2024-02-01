import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  /* display:grid;
  grid-template-rows: 96px auto 77px;
  grid-template-areas:
  "header"
  "main"
  "footer"; */

  .tags {
    width: 100%;
    padding: 8px 16px;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 16px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.DARK_800};
  }
`;

export const Main = styled.div`
  padding: 0 124px;
  margin-bottom: 86px;
  overflow-y: auto;

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    margin-bottom: 32px;
  }

  > .top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  > .center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-top: 32px;

    > Section {
      width: 400%;
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: end;
    gap:32px;
    
    > Button {
    background-color: ${({theme}) => theme.COLORS.TOMATO_400};
    width: 190px;
    }
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme}) => theme.COLORS.LIGHT_400};
    border-radius:5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.COLORS.TOMATO_400};
    border-radius:5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme}) => theme.COLORS.TOMATO_100};
  }
`;

