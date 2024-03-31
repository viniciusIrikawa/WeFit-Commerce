import Link from "next/link";
import styled from "styled-components";

export const Container = styled.section` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 4px;
    height: 596px;
    width: 90%;
    padding: 24px;
    
    @media (min-width: 768px){
        width: 1048px;
    }
`;

export const H1 = styled.h1` 
    text-align: center;
    margin-bottom: 50px;
    font-weight: 700;
    font-size: 20px;
    line-height: 27.24px;
    font-family: sans-serif;
`;

export const BtnBack = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background-color: #009EDD;
    border: none;
    cursor: pointer;
    width: 173px;
    height: 40px;
    border-radius: 4px;
    padding: 8px;
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: 700;
    line-height: 16.34px;
    margin-top: 30px;
    text-decoration: none;
`;