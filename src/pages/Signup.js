import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import NonUserLayout from '../components/general/NonUserLayout'
import SubmitButton from '../components/buttons/SubmitButton'

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  setProfile: PropTypes.func.isRequired,
}

export default function SignUp({ setProfile, signUp }) {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    triggerValidation,
    getValues,
    formState,
  } = useForm()
  const repeatVal = (passwordRepeat) =>
    passwordRepeat === getValues().password || 'Passwords do not match'
  const validateRepeat = () => {
    if (formState.isSubmitted) {
      triggerValidation({ name: 'passwordRepeat' })
    }
  }
  const history = useHistory()
  return (
    <NonUserLayout>
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
            ref={register({
              required: true,
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
              },
            })}
            onChange={validateRepeat}
            type="password"
            name="password"
            placeholder="Password"
          />
          {errors.password && (
            <Error>Password must be at least 8 characters.</Error>
          )}
        </div>
        <div>
          <input
            name="passwordRepeat"
            type="password"
            placeholder="Confirm password"
            ref={register({ required: true, validate: repeatVal })}
          />
          {errors.passwordRepeat && (
            <Error>{errors.passwordRepeat.message}</Error>
          )}
        </div>
        <div className="signup">
          <SubmitButton text="Sign up" type="submit" />
        </div>
        <div>
          <Link to="/">
            <p>Back</p>
          </Link>
        </div>
      </Form>
    </NonUserLayout>
  )
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
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px 20px 20px;

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
