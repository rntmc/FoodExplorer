import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Main = styled.form`
  overflow-y: auto;
  padding: 0 124px;
  margin-bottom: 86px;

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
    color: ${({theme}) => theme.COLORS.LIGHT_400};

  }

  > .top {
    display: flex;
    gap: 24px;
    margin-top: 24px;

  }

  > .center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-top: 32px;
    
  .tags {
    width: 100%;
    padding: 8px 8px;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 16px;

    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.DARK_800};
  }

    > Section {
      width: 300%;
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 32px;
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

