import React from 'react'
import styled from 'styled-components/macro'
import AddButton from './AddButton'

export default function ImageUpload({ onChange, previewImage }) {
  return (
    <>
      <ImageUploadStyled>
        {previewImage.imageUrl ? (
          <ImageContainer src={previewImage.imageUrl} alt="" />
        ) : (
          <ImagePlaceholder>
            <img src={process.env.PUBLIC_URL + '/images/taskpaw.png'} alt="" />
          </ImagePlaceholder>
        )}
        <AddButton className="file-input-label" text="Upload photo" />
        <input
          type="file"
          name="imageSrc"
          accept="image/*"
          className="file-input"
          onChange={onChange}
        />
      </ImageUploadStyled>
    </>
  )
}

const ImageUploadStyled = styled.label`
  font-size: 18px;
  margin-bottom: 15px;

  .file-input {
    visibility: hidden;
  }
`

const ImagePlaceholder = styled.div`
  img {
    height: 240px;
    width: 240px;
    border: 8px solid var(--tertiary);
    border-radius: 50%;
  }
`
const ImageContainer = styled.img`
  background: center url(${(props) => props.image});
  object-fit: cover;
  height: 240px;
  width: 240px;
  border: 8px solid var(--tertiary);
  border-radius: 50%;
`
