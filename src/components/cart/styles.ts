import Link from "next/link";
import styled from "styled-components";

export const CartWrapper = styled.section`
    display: flex;
    align-items: center;
`;

export const ImageWrapper = styled.div`
    margin-left: 10px;
`;

export const MyCart = styled(Link)`
    color: #fff;
    font-family: sans-serif;
    font-weight: 600;
    line-height: 19.07px;
    font-size: 14px;
    text-decoration: none;

    @media (max-width: 600px){
        display: none;
    }
`;

export const Counter = styled.p`
    color: #999999;
    font-family: sans-serif;
    font-weight: 600;
    line-height: 16.34px;
    font-size: 12px;
    text-align: right;
`;