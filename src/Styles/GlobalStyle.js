import { createGlobalStyle } from "styled-components";
import LemonJelly from "./Fonts/LemonJelly.ttf";

const GlobalStyle = createGlobalStyle`
:root {
  font-size: 62.5%;
  scroll-padding-top: 10vh;
  scroll-behavior: smooth;
}
*{
  margin: 0;
  padding:0;
  box-sizing:border-box;
  scrollbar-width: 8px;
  scrollbar-color: #909090 transparent;
}

*::-webkit-scrollbar{
  width: 8px;
}

*::-webkit-scrollbar-track{
  background: transparent;
}

*::-webkit-scrollbar-thumb{
  background-color: #909090;
  border-radius: 40px;
  border: transparent;
}

body {
  font-size: 1.6rem;
  font-family: 'Poppins','Roboto',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  
}

@font-face {
    font-family: "Lemon Jelly Personal Use";
    src: local("Lemon Jelly Personal Use"), url(${LemonJelly}) format("ttf");
    font-weight: normal;
    font-style: normal;
  }
`;
export default GlobalStyle;
