import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SubmitButton from '../components/Buttons/SubmitButton'
import CancelButton from '../components/Buttons/CancelButton'
import ImageUpload from '../components/ImageUpload'
import { useHistory, Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { db } from '../firebase'

PetForm.propTypes = {
  addPet: PropTypes.func,
}

export default function PetForm({ previewImage, handleImageUpload }) {
  const [name, setName] = useState('')
  const history = useHistory()

  function handleSubmit(event) {
    event.preventDefault()
    db.collection('pets').add({
      name,
      imageSrc: previewImage.imageUrl,
      imageTitle: previewImage.imageName,
    })
    history.push('/')
  }

  return (
    <>
      <main>
        <Form onSubmit={handleSubmit}>
          <div className="cancel">
            <Link to="/">
              <CancelButton />
            </Link>
          </div>
          <div className="photo-container">
            <ImageUpload
              name="imageSrc"
              className="photo"
              handleImageUpload={handleImageUpload}
              previewImage={previewImage}
            />
          </div>
          <div className="name">
            <label>
              Name*
              <input
                type="text"
                value={name}
                maxLength="100"
                placeholder="Insert pet name"
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus
              />
            </label>
          </div>
          <SubmitButton text="Submit" />
          <p>*Mandatory Field</p>
        </Form>
      </main>
    </>
  )
}

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto auto;
  align-items: center;
  color: var(--secondary);
  margin: 20px;
  padding: 12px;
  border: 4px solid var(--tertiary);
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);

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

  p {
    grid-row: 5/6;
    margin-top: 12px;
  }
`
