import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;

  background-color: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme, isnew }) => isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  border: ${({ theme, isnew }) => isnew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: 0.5rem;
  padding-right: 1rem;


  > button {
    border: none;
    background: none;
  }
  
  .button-delete {
    color: ${({theme}) => theme.COLORS.LIGHT_100}
  }

  .button-add {
    color: ${({theme}) => theme.COLORS.LIGHT_400}
  }

  > input {
    width: 100%;
    padding: 0.5rem 1rem;
    color:${({theme}) => theme.COLORS.LIGHT_400};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.LIGHT_500};
    }

  }
`;