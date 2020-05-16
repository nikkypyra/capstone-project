import React from 'react'
import { AuthConsumer } from './AuthContext'
import styled from 'styled-components/macro'

export default function UserHeader() {
  return (
    <AuthConsumer>
      {({ user, logOut }) => (
        <HeaderStyled>
          {user.id ? (
            <>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pawlog-app.appspot.com/o/images%2Fpawlog.png?alt=media&token=40a2b3d4-ec7d-4822-a67d-717495ece203"
                alt="pawlog"
              />
              <p onClick={logOut}>Log Out</p>
            </>
          ) : (
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pawlog-app.appspot.com/o/images%2Fpawlog.png?alt=media&token=40a2b3d4-ec7d-4822-a67d-717495ece203"
              alt="pawlog"
            />
          )}
        </HeaderStyled>
      )}
    </AuthConsumer>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  img {
    margin-left: 8px;
    height: 32px;
  }
  p {
    margin-right: 8px;
    color: var(--primary);
  }
`
