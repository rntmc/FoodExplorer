import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  margin-top:48px;

  > h2 {
    margin-bottom: 24px;

    font-family: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
    font-weight: 400;
    font-size: 32px;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
`;