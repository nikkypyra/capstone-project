import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { db } from '../firebase'
import { useHistory } from 'react-router-dom'
import UserLayout from '../components/general/UserLayout'
import PetForm from '../components/pets/PetForm'
import CreateImageUpload from '../components/pets/CreateImageUpload'

CreatePet.propTypes = {
  handleImageUpload: PropTypes.func.isRequired,
  previewImage: PropTypes.object.isRequired,
  setPreviewImage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

export default function CreatePet({
  previewImage,
  setPreviewImage,
  handleImageUpload,
  user,
}) {
  const [name, setName] = useState('')
  const history = useHistory()
  const disabled = name.length === 0
  return (
    <>
      <UserLayout>
        <Form onSubmit={handleSubmit} data-cy="create-pet">
          <PetForm name={name} setName={setName} disabled={disabled} />
          <PhotoContainer>
            <CreateImageUpload
              name="imageSrc"
              className="photo"
              handleImageUpload={handleImageUpload}
              previewImage={previewImage}
            />
          </PhotoContainer>
          <Rules>*Mandatory Field</Rules>
        </Form>
      </UserLayout>
    </>
  )
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
const Rules = styled.div`
  grid-row: 5/6;
  margin-top: 12px;
`
