import styled from "styled-components";

export const ProductsContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-flow: wrap;
    
    @media (min-width: 768px){
        width: 1080px;
        flex-direction: row;
    }
`;