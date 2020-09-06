import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
* {
 margin: 0;
 padding: 0;
}

body {
 /* background: #2F3F52; */
 font-family: Nunito, Sans-Serif;
 color: white;
 font-size: 10px;
 height: 100vh;
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
