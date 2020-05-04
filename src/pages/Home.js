import React from 'react'
import styled from 'styled-components/macro'
import Header from '../components/Header'
import pets from '../pets.json'

export default function Home() {
  return (
    <>
      <Header />
      <PetWrapper>
        {pets.map((pet) => (
          <section key={pet.petId}>
            <img src={pet.image} alt={pet.name} />
            <div>
              <h1>{pet.name.toUpperCase()}</h1>
            </div>
          </section>
        ))}
      </PetWrapper>
    </>
  )
}

const PetWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    margin: 16px 0;
  }

  img {
    height: 240px;
    width: 240px;
    border: 8px solid var(--tertiary);
    border-radius: 50%;
  }

  h1 {
    text-align: center;
    color: var(--primary);
  }
`
