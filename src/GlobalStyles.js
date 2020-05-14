import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0; 
    padding: 0;
    cursor: default;

    a {
        color: var(--primary);
        text-decoration: none;
      }
}

body {
    color: var(--secondary);
    font-size: 16px;
    line-height: 1.4;
    font-family: sans-serif;
}

main {
    margin: 8px 8px 48px 8px;
    display: grid;
    overflow: scroll;
}

:root {
    --primary: #3ec2c4;
    --secondary: #3e474a;
    --tertiary: #cff0f0;
    --quaternary: #b1b1b1;
    }
`
