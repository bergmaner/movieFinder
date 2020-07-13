import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
const Image = styled.img`
max-height: 100px;
margin: 0px 2px;
transition: transform 300ms ease 100ms;
:hover{
    transform: scale(1.1) !important;
}

`;


const SlideItem = ({image,path}) => {
      return (
          <Link to={path}><div style ={{boxSizing:"border-box"}}onClick={()=>console.log("tt")}>
          <Image src={image} alt="" />
          </div>
          </Link>
      );
}
export default SlideItem;