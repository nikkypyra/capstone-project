import React from 'react'
import styled from 'styled-components/macro'
import SubmitButton from '../components/Buttons/SubmitButton'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function SignUp({ setProfile, signUp }) {
  const { register, handleSubmit, errors, setError } = useForm()
  const history = useHistory()

  function onSubmit(data) {
    setProfile(data)
    signUp(data)
      .then((res) => {
        if (res.code === 'auth/email-already-in-use') {
          return setError('email', 'inUse', 'E-mail address already in use')
        }
        setTimeout(history.push('/'), 3000)
      })
      .catch((error) => {
        console.log(
          'Sorry, there was an error with the server. Please try again later.',
          error
        )
      })
  }

  return (
    <>
      <main>
        <Form onSubmit={handleSubmit(onSubmit)} data-cy="login">
          <div className="name">
            <input
              type="text"
              placeholder="Name"
              name="name"
              autoFocus
              ref={register({ required: true, maxLength: 80 })}
            />
          </div>
          <div className="email">
            <input
              type="text"
              placeholder="Enter your Email"
              name="email"
              ref={register({
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                minLength: 5,
                maxLength: 50,
              })}
            />
          </div>
          <div className="password">
            <input
              ref={register({ required: true, minLength: 6 })}
              type="password"
              name="password"
              placeholder="Password"
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
    margin: 24px 0;
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
