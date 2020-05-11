import React from 'react'
import styled from 'styled-components/macro'
import AddButton from '../components/Buttons/AddButton'
import { Link } from 'react-router-dom'
import { saveToLocal } from '../services'
import DeleteButton from '../components/Buttons/DeleteButton'
import PropTypes from 'prop-types'
import { storage } from '../firebase'

Home.propTypes = {
  pets: PropTypes.array.isRequired,
  setPets: PropTypes.func.isRequired,
}

export default function Home({ pets, setPets }) {
  return (
    <>
      <ButtonWrapper>
        <Link to="/create-pet">
          <AddButton text="Add Pet" />
        </Link>
      </ButtonWrapper>
      <PetWrapper>
        {pets.map((pet) => (
          <section key={pet.id}>
            <div className="image">
              <Link to={`/pet/${pet.id}`} key={pet.id}>
                <img src={pet.imageSrc} alt={pet.name} />
              </Link>
            </div>
            <div className="name">
              <h1>{pet.name.toUpperCase()}</h1>
            </div>
            <div className="delete">
              <DeleteButton onClick={() => deletePet(pet)} />
            </div>
          </section>
        ))}
      </PetWrapper>
    </>
  )
  function deletePet(pet) {
    const index = pets.indexOf(pet)
    const newPets = [...pets.slice(0, index), ...pets.slice(index + 1)]
    setPets(newPets)
    saveToLocal(newPets)
    const image = storage.ref(`images/${pet.imageUrl}`)
    image.delete().catch((error) => {})
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
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

  .delete {
    grid-row: 1/2;
    grid-column: 3/4;
  }
`
