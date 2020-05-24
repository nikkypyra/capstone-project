import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { db, storage } from '../firebase'
import { useHistory, useParams } from 'react-router-dom'
import UserLayout from '../components/general/UserLayout'
import PetFormLayout from '../components/pets/PetFormLayout'
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
        <Animation>
          <PetFormLayout onSubmit={handleSubmit} data-cy="update-pet">
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
              <DeleteButton
                onClick={() => deletePet(pet)}
                text="Delete this pet"
              />
            </Delete>
          </PetFormLayout>
        </Animation>
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

const PhotoContainer = styled.div`
  grid-row: 2/3;
  grid-column: span 2;
`
const Delete = styled.div`
  grid-row: 5/6;
  grid-column: span 2;
  margin-top: 28px;
  text-align: center;
`
const Animation = styled.section`
  animation: bounceInDown 1.5s;
  @keyframes bounceInDown {
    0% {
      opacity: 0;
      transform: translateY(-2000px);
    }
    60% {
      opacity: 1;
      transform: translateY(30px);
    }
    80% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`
