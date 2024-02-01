import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 172px;
  margin-bottom: 70px;
`;

export const StyledTextArea = styled.textarea`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  height: 172px;

  background-color: ${({theme}) => theme.COLORS.DARK_800};
  color: ${({theme}) => theme.COLORS.LIGHT_500};
  border: none;
  resize: none;
  border-radius: 8px;
  padding: 14px;

  &::placeholder{
    color: ${({theme}) => theme.COLORS.LIGHT_500};
  }
`;

export const Title = styled.h2`
  margin-top: 32px;
  margin-bottom: 16px;

  font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

`;