import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 10.75rem;
  margin-bottom: 4.375rem;
`;

export const StyledTextArea = styled.textarea`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
  font-weight: 400;
  font-size: 1.25rem;
  width: 100%;
  height: 10.75rem;

  background-color: ${({theme}) => theme.COLORS.DARK_800};
  color: ${({theme}) => theme.COLORS.LIGHT_500};
  border: none;
  resize: none;
  border-radius: 0.5rem;
  padding: 0.875rem;

  &::placeholder{
    color: ${({theme}) => theme.COLORS.LIGHT_500};
  }
`;

export const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;

  font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
  font-weight: 400;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

`;