import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SubmitButton from '../components/Buttons/SubmitButton'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <main>
        <Form /*onSubmit={handleSubmit}*/ data-cy="login">
          <div className="name">
            <input
              type="text"
              name="name"
              value={name}
              maxLength="100"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />{' '}
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              placeholder="Enter your E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="confirm-password">
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="signup">
            <SubmitButton text="Sign up" />
          </div>
          <div>
            <Link to="/login">
              <p>Back</p>
            </Link>
          </div>
        </Form>
      </main>
    </>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: var(--secondary);
  margin: 40px 20px 20px 20px;

  input {
    cursor: auto;
    width: 100%;
    height: 2.5rem;
    font-size: 16px;
    font-family: sans-serif;
    border: none;
    border-bottom: 1px solid var(--primary);
  }

  div {
    margin: 28px 0;
    width: 100%;
  }

  p {
    text-align: center;
  }

  .signup {
    text-align: center;
    button {
      padding: 16px 60px;
    }
  }
`
