import styled from 'styled-components/macro'

export default styled.form`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 3fr 3fr 3fr 3fr 1fr;
  align-items: center;
  color: var(--secondary);
  margin: 20px;
  padding: 12px;
  border: 4px solid var(--tertiary);
  border-radius: 12px;
`
