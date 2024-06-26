import Link from "next/link";
import styled from "styled-components";

export const CartContainer = styled.div`
    background-color: #fff;
    border-radius: 4px;
    min-height: 293px;
    padding: 24px 5px;
    
    @media (min-width: 768px){
        width: 1048px;
        padding: 24px;
    }
`;

export const Table = styled.table`
    height: 200px;
    width: 100%;
    display: none;

    @media (min-width: 768px){
        display: table-cell;
    }
`;

export const TableMobile = styled.table`
    height: 200px;
    width: 100%;
    display: table-cell;

    @media (min-width: 768px){
        display: none;
    }
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
    width: 300px;
    font-weight: 700;
    font-family: sans-serif;
`;

export const ProductWrapper = styled.div`
    display: flex;
`;

export const TitlePriceWrapper = styled.div`
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 700;
    font-family: sans-serif;
    color: #2F2E41;
`;

export const QuantityWrapper = styled.div`
    display: flex;
`;
    
export const Title = styled.p`
    font-size: 14px;
    margin: 2px;
    width: max-content;
`;

export const BtnQuantity = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`;

export const Quantity = styled.input`
    width: 40px;
    text-align: center;
    margin: 0 10px;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    padding: 7px 10px;
`;

export const Price = styled.p`
    font-size: 16px;
    margin: 2px;
`;

export const Divisor = styled.hr`
    margin: 20px 0px;
    width: 100%;
`;

export const BtnCheckout = styled(Link)` 
    text-transform: uppercase;
    color: #fff;
    background-color: #009EDD;
    border-radius: 4px;
    border: none;
    height: 34px;
    padding: 8px;
    margin-top: 20px;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    
    @media (min-width: 768px){
        width: 173px;
        margin-top: 0px;
    }
`;
    
export const TotalWrapper = styled.div`
    display: none;
    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
    
export const WrapperPriceMobile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px){
        display: none;
    }
`;
    
export const TotalWrapperMobile = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px){
        display: none;
    }
`;
    
export const TxtTotal = styled.span`
    padding: 8px;
    color: #999999;
    font-size: 14px;
    font-weight: 700;
    font-family: sans-serif;
    text-transform: uppercase;
`;

export const TotalPrice = styled.span`
    padding: 8px;
    font-weight: 700;
    font-family: sans-serif;
    font-size: 24px;
`;
