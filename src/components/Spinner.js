import React from "react"
import styled from "styled-components"

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Spinner = () =>{
    return(
<LoadingContainer>
<img src={require('../Spinner.svg')} />
</LoadingContainer>
    )
}
export default Spinner