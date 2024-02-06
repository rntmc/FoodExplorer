import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  overflow-y: auto;
  padding: 0 124px;
  margin-top:38px;

  > h2 {
    margin-bottom: 24px;
    font-family: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontFamily};
    font-weight: 400;
    font-size: 32px;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
`;