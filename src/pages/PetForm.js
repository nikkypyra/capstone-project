import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Header from '../components/Header'
import SubmitButton from '../components/SubmitButton'
import CancelButton from '../components/CancelButton'
import ImageUpload from '../components/ImageUpload'
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { storage } from '../firebase'

export default function TaskForm({ addPet }) {
  const [name, setName] = useState('')
  const [previewImage, setPreviewImage] = useState({
    imageUrl: '',
    imageName: '',
  })
  const history = useHistory()
  const uniquePetId = uuidv4()

  const handleSubmit = (event) => {
    event.preventDefault()
    addPet({
      name,
      imageSrc: previewImage && previewImage.imageUrl,
      imageTitle: previewImage && previewImage.imageName,
      petId: uniquePetId,
    })
    history.push('/')
    setPreviewImage({ imageUrl: '', imageName: '' })
  }

  return (
    <>
      <Header />
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
            onChange={handleImageUpload}
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
    </>
  )

  function handleImageUpload(event) {
    const image = event.target.files[0]
    const metadata = {
      name: image.name,
    }
    const uploadTask = storage.ref(`images/${image.name}`).put(image, metadata)
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
            setPreviewImage({ imageUrl: url, imageName: image.name })
          })
      }
    )
  }
}

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.25fr 4fr 1fr 1fr 0.25fr;
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
  }

  button {
    grid-row: 4/5;
    grid-column: span 2;
  }

  p {
    grid-row: 5/6;
    margin-top: 4px;
  }
`