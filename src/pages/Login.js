import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SubmitButton from '../components/Buttons/SubmitButton'
import AddButton from '../components/Buttons/AddButton'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <main>
        <Form /*onSubmit={handleSubmit}*/ data-cy="login">
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
          <div className="forgot">
            <p>Forgot password?</p>
          </div>
          <section>
            <div className="login">
              <SubmitButton text="Log in" className="login" />
            </div>
            <div>
              <p>or</p>
            </div>
            <div className="signup">
              <AddButton text="Sign up" />
            </div>
          </section>
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

  .forgot {
    margin-top: -8px;
  }

  .login {
    margin-bottom: -8px;
    button {
      padding: 16px 60px;
    }
  }

  .signup {
    margin-top: -8px;
    button {
      padding: 12px 56px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`
