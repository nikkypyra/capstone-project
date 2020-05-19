import React from 'react'
import styled from 'styled-components/macro'
import AddButton from './buttons/AddButton'
import PropTypes from 'prop-types'

ImageUpload.propTypes = {
  petImage: PropTypes.object,
  handleUpload: PropTypes.func,
}

export default function ImageUpload({ petImage, handleUpload }) {
  return (
    <>
      <ImageWrapper>
        <Image src={petImage.imageUrl} alt="" />
      </ImageWrapper>

      <UploadWrapper>
        <label htmlFor="imageSrc">
          <AddButton className="upload-button" text="Upload photo" />
        </label>
        <input
          type="file"
          name="imageSrc"
          accept="image/*"
          className="file-input"
          onChange={handleUpload}
        />
      </UploadWrapper>
    </>
  )
}

const UploadWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  .file-input {
    opacity: 0;
    position: absolute;
  }
`

const ImageWrapper = styled.div`
  text-align: center;
`

const Image = styled.img`
  height: 240px;
  width: 240px;
  border: 8px solid var(--tertiary);
  border-radius: 50%;
`
