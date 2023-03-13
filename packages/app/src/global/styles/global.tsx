import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url(${({ theme }) => theme.fontUrl});

    body {
        font-family: ${({ theme }) => theme.font}, monospace;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button {
       cursor: pointer;
       border : none;
       
       &:disabled {
            background: ${({ theme }) => theme.colors.disabled};
            cursor: not-allowed;
       }
    }
`;

export default GlobalStyles;
