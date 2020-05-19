import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SubmitButton from '../components/buttons/SubmitButton'
import CancelButton from '../components/buttons/CancelButton'
import DeleteButton from '../components/buttons/DeleteButton'
import EditImageUpload from '../components/EditImageUpload'
import { useHistory, useParams, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { db, storage } from '../firebase'
import UserLayout from '../components/general/UserLayout'

EditPetForm.propTypes = {
  pets: PropTypes.array.isRequired,
  deletePet: PropTypes.func.isRequired,
}

export default function EditPetForm({ pets, deletePet }) {
  const history = useHistory()
  const params = useParams()
  const pet = pets.find((pet) => pet.id === params.id)

  const [name, setName] = useState(pet.name)
  const [petImage, setPetImage] = useState({
    imageUrl: pet.imageSrc,
    imageName: pet.imageTitle,
  })

  const disabled = name.length === 0

  function handleSubmit(event) {
    event.preventDefault()
    db.collection('pets').doc(pet.id).update({
      name,
      imageSrc: petImage.imageUrl,
      imageTitle: petImage.imageName,
    })
    history.push('/home')
  }

  return (
    <>
      <UserLayout>
        <Form onSubmit={handleSubmit} data-cy="create-pet">
          <div className="cancel">
            <Link to="/">
              <CancelButton />
            </Link>
          </div>
          <div className="photo-container">
            <EditImageUpload
              name="imageSrc"
              className="photo"
              handleUpload={handleUpload}
              petImage={petImage}
            />
          </div>
          <div className="name">
            <label>
              Name*
              <input
                type="text"
                name="name"
                value={name}
                maxLength="9"
                placeholder="Insert pet name"
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus
              />
            </label>
          </div>
          <SubmitButton text="Submit" type="submit" disabled={disabled} />
          <div className="delete">
            <Link to="/">
              <DeleteButton
                onClick={() => deletePet(pet)}
                text="Delete this pet"
              />
            </Link>
          </div>
        </Form>
      </UserLayout>
    </>
  )
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

  input[type='text'] {
    cursor: auto;
  }

  label,
  input {
    margin: 8px 0;
  }

  label {
    font-size: 18px;
  }
  input {
    width: 100%;
    height: 2rem;
    font-size: 16px;
    font-family: sans-serif;
    border: none;
    border-bottom: 1px solid var(--primary);
  }

  .cancel {
    grid-row: 1/2;
    grid-column: 2/3;
    display: flex;
    justify-content: flex-end;
  }

  .photo-container {
    grid-row: 2/3;
    grid-column: span 2;
  }

  .name {
    grid-row: 3/4;
    grid-column: span 2;
    margin: 20px 0;
  }

  button {
    grid-row: 4/5;
    grid-column: span 2;
  }

  .delete {
    grid-row: 5/6;
    grid-column: span 2;
    margin-top: 24px;
    text-align: center;
  }
`
