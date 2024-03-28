import styled from "styled-components";

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px 24px 16px;

    @media (min-width: 768px){
        width: 1080px;
    }
`;

export const WebsiteName = styled.span`
    color: #fff;
    font-family: sans-serif;
    font-weight: 700;
    line-height: 27.24px;
`;