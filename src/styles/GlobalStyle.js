import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
* {
 margin: 0;
 padding: 0;
}

body {
 /* background: #2F3F52; */
 font-family: Nunito, Sans-Serif;
 color: black;
}

a {
 text-decoration: none;
 color: white;
}

ul {
 list-style-type: none;
}
`;

export default GlobalStyle;
