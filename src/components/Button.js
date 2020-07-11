import React from "react";
import styled from "styled-components";

const Submit = styled.button`
font-family: "Montserrat", sans-serif;
outline: none;
background: #111;
border: #000 solid 2px;
cursor: pointer;
color: #fff;
padding: 3px 7px;
border-radius: 10px;
font-size: 45px;
margin-bottom: 20px;
transition: all 0.4s;
:hover{
    background: #000;
}
`;

const Button = ({children, onClick}) => {
    return(
        <Submit onClick={onClick}>{children}</Submit>
    )
}

export default Button