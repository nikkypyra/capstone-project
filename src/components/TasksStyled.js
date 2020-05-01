import React from 'react'
import styled from 'styled-components/macro'

export default function TasksStyled({ todos, onDoneClick }) {
  return (
    <TaskWrapper>
      {todos.map((todo) => (
        <section key={todo.id}>
          <img src={process.env.PUBLIC_URL + '/images/taskpaw.png'} alt="" />
          <h3>{todo.description}</h3>
          <h4>{todo.time}</h4>
          <p className="date">{todo.date}</p>
          <p className="person">{todo.person}</p>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => onDoneClick(todo.id)}
          ></input>
        </section>
      ))}
    </TaskWrapper>
  )
}

const TaskWrapper = styled.main`
  section {
    margin: 28px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 3fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: space-between;
  }

  img {
    height: 40px;
    width: 40px;
    border: 4px solid var(--tertiary);
    border-radius: 50%;
    grid-row: span 3;
    grid-column: 1/2;
  }

  h3 {
    grid-row: 1/2;
    grid-column: 2/4;
  }

  h4 {
    grid-row: 2/3;
    grid-column: 2/3;
  }

  .date {
    grid-row: 2/3;
    grid-column: 3/4;
  }

  .person {
    grid-row: 3/4;
    grid-column: 2/4;
  }

  input {
    grid-row: 2/3;
    grid-column: 4/5;
    appearance: none;
    display: inline-block;
    width: 28px;
    height: 28px;
    padding: 4px;
    background-clip: padding-box;
    border: 1.5px solid #bbbbbb;
    border-radius: 50%;

    &:checked {
      background-image: url(/images/checkmark.png);
      background-position: center;
    }
  }
`

/*
import { loadFromLocal, saveToLocal } from '../services'  

const [checked, setChecked] = useState(loadFromLocal('checked'))

  useEffect(() => {
    saveToLocal('checked', checked)
  }, [checked])
*/
