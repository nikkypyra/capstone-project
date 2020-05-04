import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0; 
    padding: 0;
}

#root {
    display: grid;
    grid-template-rows: 48px auto;
}

body {
    color: var(--secondary);
    font-size: 16px;
    line-height: 1.4;
    font-family: sans-serif;
   
}

main {
    margin: 8px;
}

:root {
    --primary: #3ec2c4;
    --secondary: #3e474a;
    --tertiary: #cff0f0;
    --quaternary: #b1b1b1;
    }
`
