import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 12px 14px;
  border-radius: 5px;
  border: none;
  background-color: ${({theme}) => theme.COLORS.DARK_900};
  color: ${({theme}) => theme.COLORS.LIGHT_500};

  > input {
    width: 100%;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: 0;

    &:placeholder{
      color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
  }

  svg {
    margin-right: 1rem;
    font-size: 1.5rem;
    color: ${({theme}) => theme.COLORS.LIGHT_500};
  }
`;