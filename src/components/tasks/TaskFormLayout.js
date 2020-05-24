import styled from 'styled-components/macro'

export default styled.form`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 3fr 3fr 3fr 3fr 1fr;
  align-items: center;
  color: var(--secondary);
  margin: 12px;
  padding: 12px;
  border: 4px solid var(--tertiary);
  border-radius: 12px;
  animation: bounceInDown 1.5s;
  @keyframes bounceInDown {
    0% {
      opacity: 0;
      transform: translateY(-2000px);
    }
    60% {
      opacity: 1;
      transform: translateY(30px);
    }
    80% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`
