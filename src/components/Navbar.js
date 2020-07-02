import React from "react";
import styled from "styled-components"

const Header = styled.div`
background: black;
color: white;
box-sizing:border-box;
height:10vh;
font-size: 30px;
padding: 0px 30px;
display: flex;
align-items: center;
justify-content: flex-start;
`;

const Navbar = () =>{
    return(
        <Header>
           <div>Movie Finder</div> 
        </Header>
    )
}
export default Navbar;