import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  > h2 {
    margin-bottom: 1rem;

    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
    font-weight: 400;
    font-size: 1.25rem;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }
`;