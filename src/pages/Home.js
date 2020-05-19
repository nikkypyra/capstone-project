import React from 'react'
import styled from 'styled-components/macro'
import AddButton from '../components/buttons/AddButton'
import { Link } from 'react-router-dom'
import EditButton from '../components/buttons/EditButton'
import UserHeader from '../components/UserHeader'
import Navigation from '../components/Navigation'
import PropTypes from 'prop-types'

Home.propTypes = {
  pets: PropTypes.array.isRequired,
}

export default function Home({ pets }) {
  return (
    <>
      <UserHeader />
      <ButtonWrapper>
        <Link to="/create-pet">
          <AddButton text="Add Pet" />
        </Link>
      </ButtonWrapper>
      <PetWrapper>
        {pets.length !== 0 ? (
          pets.map((pet) => (
            <section key={pet.id}>
              <div className="image">
                <Link to={`/pet/${pet.id}`} key={pet.id}>
                  <img src={pet.imageSrc} alt={pet.name} />
                </Link>
              </div>
              <div className="name">
                <h1>{pet.name.toUpperCase()}</h1>
              </div>
              <div className="edit">
                <Link to={`/pet/${pet.id}/update-pet`}>
                  <EditButton />
                </Link>
              </div>
            </section>
          ))
        ) : (
          <TextStyled>You have not added any pets yet.</TextStyled>
        )}
      </PetWrapper>
      <Navigation />
    </>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 20px 0 0;
`
const PetWrapper = styled.main`
  margin-top: 40px;
  section {
    margin: 20px 0;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 4fr 1fr;
  }

  .image {
    grid-row: 1/2;
    grid-column: 2/3;
    text-align: center;
    img {
      height: 240px;
      width: 240px;
      border: 8px solid var(--tertiary);
      border-radius: 50%;
    }
  }

  .name {
    grid-row: 2/3;
    grid-column: 2/3;
    text-align: center;
    color: var(--primary);
  }

  .edit {
    grid-row: 1/2;
    grid-column: 3/4;
  }
`
const TextStyled = styled.h3`
  text-align: center;
  margin-top: 60px;
  color: var(--primary);
`
