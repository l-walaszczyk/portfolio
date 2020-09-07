import { createGlobalStyle } from "styled-components/macro";

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
 color: white;
 /* height: 100vh; */
}

@media (min-width: 360px) {
 :root {
  font-size: 18px;
 }
}

a {
 text-decoration: none;
 color: white;
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
`;

export default GlobalStyle;
