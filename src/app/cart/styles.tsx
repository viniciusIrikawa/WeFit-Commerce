import styled from "styled-components";

export const CartContainer = styled.div`
    background-color: #fff;
    border-radius: 4px;
    min-height: 293px;
    width: 100%;
    padding: 24px;
`;

export const Table = styled.table`
    height: 200px;
    width: 100%;
`;

export const TableHeader = styled.th`
    font-family: sans-serif;
    font-weight: 700;
    color: #999999;
    text-transform: uppercase;
    text-align: start;
`;

export const TableData = styled.td`
    padding: 8px;
`;

export const Divisor = styled.hr`
    margin: 20px 0px;
    height: 2px;
    width: 100%;
`;

export const BtnCheckout = styled.button` 
    text-transform: uppercase;
    color: #fff;
    background-color: #009EDD;
    border-radius: 4px;
    border: none;
    width: 173px;
    height: 34px;
    padding: 8px;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
`;
    
export const TotalWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
    
export const TxtTotal = styled.span`
    padding: 8px;
    color: #999999;
    font-size: 14px;
    font-weight: 700;
    font-family: sans-serif;
    text-transform: uppercase;
`;

export const Price = styled.span`
    padding: 8px;
    font-weight: 700;
    font-family: sans-serif;
    font-size: 24px;
`;
