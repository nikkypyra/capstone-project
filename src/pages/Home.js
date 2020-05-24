import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import UserLayout from '../components/general/UserLayout'
import AddButton from '../components/buttons/AddButton'
import EditButton from '../components/buttons/EditButton'

Home.propTypes = {
  pets: PropTypes.array.isRequired,
}

export default function Home({ pets }) {
  return (
    <>
      <UserLayout>
        <AddLink to="/create-pet">
          <AddButton text="Add Pet" />
        </AddLink>
        {pets.length !== 0 ? (
          pets.map((pet) => (
            <PetWrapper key={pet.id}>
              <div className="image animation">
                <Link to={`/pet/${pet.id}`} key={pet.id}>
                  <img src={pet.imageSrc} alt={pet.name} data-cy="pet" />
                </Link>
              </div>
              <div className="name animation">
                <h1>{pet.name.toUpperCase()}</h1>
              </div>
              <div className="edit">
                <Link to={`/pet/${pet.id}/update-pet`} data-cy="edit-pet">
                  <EditButton />
                </Link>
              </div>
            </PetWrapper>
          ))
        ) : (
          <TextStyled>You have not added any pets yet.</TextStyled>
        )}
      </UserLayout>
    </>
  )
}

const AddLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin: 20px 16px 20px 0;
`
const PetWrapper = styled.section`
  margin: 16px 0;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 4fr 1fr;

  .animation {
    animation: fadein 1.5s;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 100;
      }
    }
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
