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
        height: 2rem;
        width: 100%;
        font-size: 16px;
        border: none;
        border-bottom: 1px solid var(--primary);
        :focus {
          outline: none;
      }
      } 

      button {
        :focus {
          outline: none;
      }
      }
}

body {
    color: var(--secondary);
    font-size: 16px;
    line-height: 1.4;
}

main {
    margin: 8px 12px 68px;
    display: grid;
    overflow: scroll;

     
}

:root {
    --primary: #3ec2c4;
    --secondary: #3e474a;
    --tertiary: #cff0f0;
    --quaternary: #757575;
    }
`
