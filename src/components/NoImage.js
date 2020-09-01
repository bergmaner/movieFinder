import React from "react"
import styled from "styled-components"
import {IoMdImages} from "react-icons/io"

const Container = styled.div`
background: #fff;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const NoImageIcon = styled(IoMdImages)`
color: #000;
width: 185px;
height: 285px;
`

const NoImage = () => {
return(
<Container><NoImageIcon/></Container>
)
}
export default NoImage