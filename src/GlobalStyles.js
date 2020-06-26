import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }

    body {
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        font-family: Arial;
        transition: all 0.50s linear;

        & .ant-typography {
            color: ${({theme}) => theme.text};
        }

        & .ant-switch {
            float: right;
        }
    }
`;

export default GlobalStyles;
