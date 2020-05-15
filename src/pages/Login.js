import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SubmitButton from '../components/Buttons/SubmitButton'
import AddButton from '../components/Buttons/AddButton'
import UserHeader from '../components/UserHeader'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

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
                placeholder="Enter your E-Mail"
                required
                autoFocus
              />
              {errors.email && errors.email.type === 'notFound' && (
                <p>{errors.email.message}</p>
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
                <p>
                  {errors.password.message}
                  <span onClick={handleReset}> reset your password.</span>
                </p>
              )}
              {errors.password && errors.password.type === 'tooMany' && (
                <p>{errors.password.message}</p>
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
    resetPassword(profile)
  }
}

const WrapperStyled = styled.section`
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

  .login {
    margin-top: 40px;
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
`
