import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > h2 {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
        font-weight: 400;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        margin-bottom: 16px;
    }   

    > input {
        width: 100%;
        border-radius: 8px;
        background-color: ${({theme}) => theme.COLORS.DARK_800};
        padding: 16px 14px;
        border: 0;
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        text-align: start;
    }

`;