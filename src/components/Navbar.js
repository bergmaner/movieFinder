import React from "react";
import styled from "styled-components"

const Header = styled.div`
background: black;
color: white;
font-size: 30px;
padding: 20px 30px;
display: flex;
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