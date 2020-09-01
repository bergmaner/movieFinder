import React from "react";
import styled from "styled-components";
import NoImage from "./NoImage"
import {Link} from "react-router-dom";

const Image = styled.img`
margin: 0;
transition: transform 300ms ease 100ms;
`;


const Title = styled.span`
display: inline-block;
    vertical-align: middle;
    line-height: 20px;
`

const TitleContainer = styled.div`
position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.76);
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    line-height: 235px;
    vertical-align: middle;
    opacity: 0;
    transition: all .25s ease;
`

const Poster = styled.div`
height: 278px;
width: 185px;
position:relative;
:hover ${TitleContainer}{
    opacity: 1;
}
`

const SlideItem = ({image,path,name,isExist}) => {
      return (
          <Link to={path}><Poster style ={{boxSizing:"border-box"}}>
          {isExist? <Image src={image} alt="" />: <NoImage/>}
          <TitleContainer>
          <Title>{name}</Title>
          </TitleContainer>
          </Poster>
          </Link>
      );
}
export default SlideItem;