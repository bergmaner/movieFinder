import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
const Image = styled.img`

margin: 0;
transition: transform 300ms ease 100ms;
`;


const SlideItem = ({image,path}) => {
      return (
          <Link to={path}><div style ={{boxSizing:"border-box"}}>
          <Image src={image} alt="" />
          </div>
          </Link>
      );
}
export default SlideItem;