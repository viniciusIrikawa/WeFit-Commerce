import styled from "styled-components";

export const CardWrapper = styled.article`
    display: flex;
    align-items: center;
    border-radius: 4px;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    margin: 10px 0;
    padding: 16px;
    width: 90%;
    height: 324px;

    @media (min-width: 768px){
        width: 320px;
    }
`;

export const H2 = styled.span`
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 16.34px;
    margin: 10px 0;
`;

export const Price = styled.span`
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 21.79px;
    margin: 10px 0;
`;

export const BtnAddToCart = styled.button`
    background-color: #009EDD;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    padding: 8px;
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: 700;
    line-height: 16.34px;
`;