import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { db, storage } from '../firebase'
import { useHistory, useParams, Link } from 'react-router-dom'
import UserLayout from '../components/general/UserLayout'
import PetForm from '../components/pets/PetForm'
import UpdateImageUpload from '../components/pets/UpdateImageUpload'
import DeleteButton from '../components/buttons/DeleteButton'

UpdatePet.propTypes = {
  pets: PropTypes.array.isRequired,
  deletePet: PropTypes.func.isRequired,
}

export default function UpdatePet({ pets, deletePet }) {
  const history = useHistory()
  const params = useParams()
  const pet = pets.find((pet) => pet.id === params.id)
  const [name, setName] = useState(pet.name)
  const [petImage, setPetImage] = useState({
    imageUrl: pet.imageSrc,
    imageName: pet.imageTitle,
  })
  const disabled = name.length === 0
  return (
    <>
      <UserLayout>
        <Form onSubmit={handleSubmit} data-cy="create-pet">
          <PetForm name={name} setName={setName} disabled={disabled} />
          <PhotoContainer>
            <UpdateImageUpload
              name="imageSrc"
              className="photo"
              handleUpload={handleUpload}
              petImage={petImage}
            />
          </PhotoContainer>
          <Delete>
            <Link to="/">
              <DeleteButton
                onClick={() => deletePet(pet)}
                text="Delete this pet"
              />
            </Link>
          </Delete>
        </Form>
      </UserLayout>
    </>
  )
  function handleSubmit(event) {
    event.preventDefault()
    db.collection('pets').doc(pet.id).update({
      name,
      imageSrc: petImage.imageUrl,
      imageTitle: petImage.imageName,
    })
    history.push('/home')
  }

  function handleUpload(event) {
    const image = event.target.files[0]
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        alert('An error occurred, please try again.')
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setPetImage({ imageUrl: url, imageName: image.name })
          })
      }
    )
  }
}

const Form = styled.form`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  align-items: center;
  color: var(--secondary);
  margin: 20px;
  padding: 12px;
  border: 4px solid var(--tertiary);
  border-radius: 12px;
`
const PhotoContainer = styled.div`
  grid-row: 2/3;
  grid-column: span 2;
`
const Delete = styled.div`
  grid-row: 5/6;
  grid-column: span 2;
  margin-top: 24px;
  text-align: center;
`
