import styled from "styled-components";

export const Container = styled.aside`
  grid-area:none;
  font-size: 1rem;
  position:absolute;
  width: 100%;
  display:none;
  z-index:1000;

  &[data-menu-is-open="true"]{
    display:block
  }

  .header {
    padding: 1.5rem 2.3rem;
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: left;
    gap:16px;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
    
    >button {
      background-color:transparent;
      border:none;
      font-size: 2.5rem;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
      display:flex;
      align-items: center;

      >svg{
        margin:auto;
      }
    }
  }

  .dropDown {
    padding-left: 28px;
    padding-right: 28px;
    padding-top:36px;
    background-color: ${({theme}) => theme.COLORS.DARK_400};

    .input{
      margin-bottom: 36px;
    }

    >button {
      text-align:start;
      font-size: 1.5rem;
      background-color: transparent;
      border:transparent;
      padding-bottom: 10px;
      padding-top:10px;
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      font-family: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR.fontFamily}; 
      border-bottom: 1px solid;
      border-bottom-color: ${({theme}) => theme.COLORS.LIGHT_700};
      width: 100%;
    }
  }
`;