import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SubmitButton from '../components/buttons/SubmitButton'
import AddButton from '../components/buttons/AddButton'
import UserHeader from '../components/UserHeader'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'

Login.propTypes = {
  profile: PropTypes.object.isRequired,
  logIn: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  setProfile: PropTypes.func.isRequired,
}

export default function Login({ logIn, resetPassword, profile, setProfile }) {
  const { register, handleSubmit, errors, setError } = useForm()
  const [loginCounter, setLoginCounter] = useState(0)
  return (
    <>
      <UserHeader />
      <main>
        <WrapperStyled>
          <form onSubmit={handleSubmit(onSubmit)} data-cy="login">
            <div className="email">
              <input
                ref={register}
                type="email"
                name="email"
                placeholder="Enter your E-mail"
                required
              />
              {errors.email && errors.email.type === 'notFound' && (
                <Error>{errors.email.message}</Error>
              )}
            </div>
            <div className="password">
              <input
                ref={register}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              {errors.password && errors.password.type === 'reset' && (
                <Error>
                  {errors.password.message}
                  <span onClick={handleReset}> reset your password.</span>
                </Error>
              )}
              {errors.password && errors.password.type === 'tooMany' && (
                <Error>{errors.password.message}</Error>
              )}
            </div>

            <div className="login">
              <SubmitButton text="Log in" className="login" />
            </div>
          </form>
          <section>
            <div>
              <p>or</p>
            </div>
            <div className="signup">
              <Link to="/signup">
                <AddButton text="Sign up" />
              </Link>
            </div>
          </section>
        </WrapperStyled>
      </main>
    </>
  )

  function onSubmit(data) {
    setProfile(data)
    logIn(data)
      .then((res) => {
        if (res.code === 'auth/user-not-found') {
          return setError(
            'email',
            'notFound',
            'The email or password you entered did not match our records. Please double-check and try again.'
          )
        }
        if (res.code === 'auth/wrong-password' && loginCounter <= 3) {
          setLoginCounter(loginCounter + 1)
          return setError(
            'password',
            'reset',
            'The email or password you entered did not match our records. You may try again or  '
          )
        }
        if (res.code === 'auth/too-many-requests') {
          return setError(
            'password',
            'tooMany',
            'Too many attempts, please try again later.'
          )
        }
      })
      .catch((error) => {
        console.log(
          'Sorry, there was an error with the server. Please try again later.',
          error
        )
      })
  }

  function handleReset() {
    alert('Please check your email for password reset instructions.')
    resetPassword(profile)
  }
}

const WrapperStyled = styled.section`
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

  .email {
    margin-bottom: 44px;
  }

  .login {
    margin-top: 64px;
    margin-bottom: -8px;
    text-align: center;
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

  span {
    color: var(--primary);
  }
`

const Error = styled.p`
  color: red;
`
