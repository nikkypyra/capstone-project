import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SubmitButton from '../components/buttons/SubmitButton'
import CancelButton from '../components/buttons/CancelButton'
import ImageUpload from '../components/ImageUpload'
import { useHistory, Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import PropTypes from 'prop-types'
import { db } from '../firebase'
import UserHeader from '../components/UserHeader'

PetForm.propTypes = {
  handleImageUpload: PropTypes.func.isRequired,
  previewImage: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default function PetForm({
  previewImage,
  setPreviewImage,
  handleImageUpload,
  user,
}) {
  const [name, setName] = useState('')
  const history = useHistory()
  const disabled = name.length === 0

  function handleSubmit(event) {
    event.preventDefault()
    db.collection('pets').add({
      name,
      imageSrc: previewImage.imageUrl,
      imageTitle: previewImage.imageName,
      userId: user.id,
    })
    setName({ name: '' })
    setPreviewImage({
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/pawlog-app.appspot.com/o/images%2Ftaskpaw.png?alt=media&token=8ad10974-93e4-4fd7-ae05-1567d049ad1f',
      imageName: 'taskpaw.png',
    })
    history.push('/home')
  }

  return (
    <>
      <UserHeader />
      <main>
        <Form onSubmit={handleSubmit} data-cy="create-pet">
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
          <p>*Mandatory Field</p>
        </Form>
      </main>
      <Navigation />
    </>
  )
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

  p {
    grid-row: 5/6;
    margin-top: 12px;
  }
`
