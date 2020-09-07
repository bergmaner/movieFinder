import React from "react";
import styled from "styled-components";

const Container = styled.div`
color: #fff !important;
padding: 30px 0 ;
background: #333231;
a{
    color: #fff;
    text-decoration: none;
    :hover{
        text-decoration: underline;
    }
}
`

const Footer = () => {
    return(
        <Container>Copywright &copy; <a href="https://github.com/bergmaner" target="new_blank">bergu</a></Container>
    )
}
export default Footer;