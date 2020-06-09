import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import demoVideo from '../images/preview.gif'

export default function Demo() {
  return (
    <main>
      <GifContainer>
        <Img src={demoVideo} alt="demo" />
      </GifContainer>
      <BackLink to="/">
        <p>Back</p>
      </BackLink>
    </main>
  )
}

const GifContainer = styled.section`
  margin: 8px auto;
`
const Img = styled.img`
  height: 600px;
  width: 340px;
`

const BackLink = styled(Link)`
  margin: 0 auto;
`
