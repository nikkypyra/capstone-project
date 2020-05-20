import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Checkbox from './Checkbox'

TasksStyled.propTypes = {
  todo: PropTypes.object,
  handleCheckbox: PropTypes.func.isRequired,
}

export default function TasksStyled({ todo, handleCheckbox }) {
  return (
    <>
      <Marker>
        <img src={process.env.PUBLIC_URL + '/images/taskpaw.png'} alt="" />
      </Marker>
      <Description>
        <h3>{todo.description}</h3>
      </Description>
      <Time>
        <h4>{todo.time}</h4>
      </Time>
      <Date data-cy="date">
        <p>{todo.date}</p>
      </Date>
      <Person data-cy="owner_name">
        <p>To be completed by: {todo.person}</p>
      </Person>
      <Status>
        <Checkbox
          checked={todo.complete}
          onChange={() => handleCheckbox(todo)}
        ></Checkbox>
      </Status>
    </>
  )
}

const Marker = styled.div`
  grid-row: 1/3;
  grid-column: 1/2;

  img {
    height: 40px;
    width: 40px;
    border: 4px solid var(--tertiary);
    border-radius: 50%;
  }
`

const Description = styled.div`
  grid-row: 1/2;
  grid-column: 2/5;
`

const Time = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
`

const Date = styled.div`
  grid-row: 2/3;
  grid-column: 3/4;
`

const Person = styled.div`
  grid-row: 3/4;
  grid-column: 2/6;
`

const Status = styled.div`
  grid-row: 2/3;
  grid-column: 4/5;
`
