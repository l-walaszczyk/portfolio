import { createGlobalStyle } from "styled-components/macro";
import variables from "./variables";

// adobe palette #203149 #579DFF #11161F #FFBD3D #FFCE70

const GlobalStyle = createGlobalStyle`
* {
 margin: 0;
 padding: 0;
}

:root {
 font-size: 16px;
}

body {
 font-family: Nunito, Sans-Serif;
 font-weight: 300;
 font-style: italic;
 color: white;
 /* height: 100vh; */
}

@media (min-width: 360px) and (min-height: 360px) {
 :root {
  font-size: 18px;
 }
}

@media (min-width: 640px) and (min-height: 640px) {
 :root {
  font-size: 20px;
 }
}
/* 
@media (min-width: 768px) and (min-height: 768px) {
 :root {
  font-size: 22px;
 } 
}*/

h1, h2, h3 {
 font-weight: 300;
 &::first-letter {
   text-transform: uppercase;
 }
}

a, button {
 text-decoration: none;
 color: white;
 /* &:hover, &:focus{ */
  /* outline: none; */
 &:hover {
  color: ${variables.hoverColor}
 }
}

ul {
 list-style-type: none;
}

button {
 font-family: Nunito, Sans-Serif;
 background-color: transparent;
 color: white;
 border: none;
 cursor: pointer;
}

form * {
 font-family: Nunito, Sans-Serif;
 font-size: 0.8rem;
}
`;

export default GlobalStyle;
