import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components"

const Button = styled.button`
position: absolute;
top: 0;
bottom: 0;
right: ${props => props.type === "next" ? "0" : ""};
left: ${props => props.type === "prev" ? "0" : ""};
width: 40px;
height: 100%;
background: rgba(0, 0, 0, 0.5);
border: 0;
outline: 0;
padding: 0;
margin:  0;
z-index: 1;
transition: all 0.4s;
cursor: pointer;
:hover{
    background: rgba(0, 0, 0, 0.8);
}
span {
    width: 25px;
    color: #fff;
    display: block;
    margin: 0 auto;
    display: flex;
    align-items:center;
    transform: ${props => props.type === "next" ? "rotateZ(-90deg)" : "rotateZ(90deg);" };
    svg{
        font-size: 40px;
    }
  }

`;

const SlideButton = ({ onClick, type }) => (
  <Button type={type} onClick={onClick}>
    <span>
      <MdKeyboardArrowDown/>
    </span>
  </Button>
);

export default SlideButton;
