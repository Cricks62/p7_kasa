import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    *{ 
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
     }

     #root {
      display: flex;
      flex-direction: column;
     }
`
function GlobalStyle() {
  
    return <StyledGlobalStyle />
  }

export default GlobalStyle