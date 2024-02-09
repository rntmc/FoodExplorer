import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > h2 {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
        font-weight: 400;
        font-size: 1.25rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        margin-bottom: 1rem;
    }   

    > input {
        width: 100%;
        border-radius: 0.5rem;
        font-size: 1.25rem;
        background-color: ${({theme}) => theme.COLORS.DARK_800};
        padding: 1rem 0.875rem;
        border: 0;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        text-align: start;
    }

`;