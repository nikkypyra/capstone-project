import React from 'react'
import styled from 'styled-components/macro'
import SubmitButton from '../components/buttons/SubmitButton'
import UserHeader from '../components/UserHeader'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  setProfile: PropTypes.func.isRequired,
}

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
      <UserHeader />
      <main>
        <Form onSubmit={handleSubmit(onSubmit)} data-cy="login">
          <div className="email">
            <input
              type="text"
              placeholder="Enter your E-mail"
              name="email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {((errors.email && errors.email.type === 'required') ||
              (errors.email && errors.email.type === 'pattern')) && (
              <Error>Please enter a valid e-mail address.</Error>
            )}
            {errors.email && errors.email.type === 'inUse' && (
              <Error>{errors.email.message}</Error>
            )}
          </div>
          <div className="password">
            <input
              ref={register({ required: true, minLength: 6 })}
              type="password"
              name="password"
              placeholder="Password"
            />
            {errors.password && (
              <Error>Password must be at least 6 characters long.</Error>
            )}
          </div>
          <div className="signup">
            <SubmitButton text="Sign up" />
          </div>
          <div>
            <Link to="/">
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
  margin: 100px 20px 20px 20px;

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
    margin-top: 44px;
    text-align: center;
    button {
      padding: 16px 60px;
    }
  }
`
const Error = styled.p`
  color: red;
`
