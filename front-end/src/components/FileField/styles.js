import styled from "styled-components";

export const Container = styled.div`
    width: 500px;

    > h2 {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
        font-weight: 400;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        margin-bottom: 16px;
    }

    div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 12px;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    > input {
        background-color: red;
        position: absolute;
        cursor: pointer;
        opacity: 0;
    }
    
    > svg {
        font-size: 26px;
        margin-right: 8px;
    }

    > span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }

    }
`;