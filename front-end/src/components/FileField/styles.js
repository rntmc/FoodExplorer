import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 31.25rem;

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
        width:100%;
    }

    > h2 {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
        font-weight: 400;
        font-size: 1.25rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        margin-bottom: 1rem;
    }

    div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    padding: 0.75rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
        display:flex;
        justify-content:start;
        padding-left:2rem;
    }

    > input {
        position: absolute;
        cursor: pointer;
        min-width:14%;
        max-width:15%;
        opacity: 0;
        z-index:1;

        @media(max-width:${DEVICE_BREAKPOINTS.MD}){
        background-color:red;
        min-width:16%;
        max-width:100%;
        }
    }
    
    > svg {
        position: relative;
        font-size: 1.625rem;
        margin-right: 0.5rem;
    }

    > span {
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        font-size:1.25rem;
    }

    }
`;