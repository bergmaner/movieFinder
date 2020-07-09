import React from "react";
import styled from "styled-components";
import SliderContext from "./context";

const Image = styled.img`
max-height: 100px;
margin: 0px 2px;
transition: transform 300ms ease 100ms;
:hover{
    transform: scale(1.1) !important;
}

`;


const Item = ({image}) => {
    return(
<SliderContext.Consumer>
    {({ elementRef }) => {
      return (
          <div onClick={()=>console.log("tt")}ref={elementRef}>
          <Image src={image} alt="" />
          </div>
      );
    }}
  </SliderContext.Consumer>
    )
}
export default Item;