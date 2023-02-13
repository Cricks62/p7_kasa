import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    *{ 
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #ff6060;
     }

     #root {
      display: flex;
      flex-direction: column;
     }

     .imgtoppages { 
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .imagetitre {
      min-width: 100%;
      height: 225px
  }
  
  @media screen and ( max-width: 768px) {
      .imagetitre {
          height: 115px;
          min-width: 100%;
      }
      
  }
`
function GlobalStyle() {
  
    return <StyledGlobalStyle />
  }

export default GlobalStyle