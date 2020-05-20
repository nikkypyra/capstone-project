import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0; 
    padding: 0;
    cursor: default;
    font-family: sans-serif;
    

    a {
        color: var(--primary);
        text-decoration: none;
      }
}

body {
    color: var(--secondary);
    font-size: 16px;
    line-height: 1.4;
}

main {
    margin: 8px 8px 48px 8px;
    display: grid;
    overflow: scroll;

    input[type='text'] {
        cursor: auto;
      }
    
      label,
      input {
        margin: 8px 0;
      }
    
      label {
        font-size: 18px;
      }
      
      input {
        width: 100%;
        height: 2rem;
        font-size: 16px;
        border: none;
        border-bottom: 1px solid var(--primary);
      }  
}

:root {
    --primary: #3ec2c4;
    --secondary: #3e474a;
    --tertiary: #cff0f0;
    --quaternary: #b1b1b1;
    }
`
