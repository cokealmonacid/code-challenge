import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }

    body {
        background: lightblue;
        font-family: Arial;
        height: 100vh;
        width: 100vw;
    }

    img{
        display:flex;
        width:100%;
        height:100%;
        object-fit:cover;
    }
`;

export default GlobalStyles;
