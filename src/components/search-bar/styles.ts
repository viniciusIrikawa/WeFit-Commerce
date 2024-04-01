import styled from "styled-components";

export const WrapperInputBar = styled.div`
    position: relative;
`;

export const InputBar = styled.input`
    background-color: #FFFFFF;
    border-radius: 8px;
    border: 2px;
    padding: 16px;
    width: 90%;
    height: 30px;

    @media (min-width: 768px){
        width: 1048px;
    }
`;

export const BtnSearch = styled.button`
    position: absolute;
    right: 3%;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: transparent;
    cursor: pointer;
`;