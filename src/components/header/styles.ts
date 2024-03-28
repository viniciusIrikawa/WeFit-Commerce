import styled from "styled-components";

export const HeaderWrapper = styled.header`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1080px;
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px 24px 16px;
`;

export const WebsiteName = styled.span`
    color: #fff;
    font-family: sans-serif;
    font-weight: 700;
    line-height: 27.24px;
`;