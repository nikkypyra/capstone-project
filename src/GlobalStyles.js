import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;   
}

body {
    padding: .75em;
    color: var(--secondary);
    font-size: 16px;
    line-height: 1.4;
    font-family: sans-serif;
}

:root {
    --primary: #3ec2c4;
    --secondary: #002a3a;
    --tertiary: #cff0f0
    }
`
