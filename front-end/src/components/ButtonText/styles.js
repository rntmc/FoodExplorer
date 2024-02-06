import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({theme}) => theme.COLORS.LIGHT_300};

  border: none;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px 124px;

  > svg {
    font-size: 32px;
  }
`;