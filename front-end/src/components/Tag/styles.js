import styled from "styled-components";

export const Container = styled.span`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
  
  padding: 4px 8px;
  border-radius: 5px;
  margin-right: 12px;

  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  color: ${({theme}) => theme.COLORS.LIGHT_100};

`;