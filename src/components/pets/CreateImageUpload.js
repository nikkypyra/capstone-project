import React from 'react'
import styled from 'styled-components/macro'
import AddButton from '../buttons/AddButton'
import PropTypes from 'prop-types'

ImageUpload.propTypes = {
  previewImage: PropTypes.object,
  handleImageUpload: PropTypes.func,
}

export default function ImageUpload({ previewImage, handleImageUpload }) {
  return (
    <>
      {previewImage.imageUrl ? (
        <ImageWrapper>
          <img src={previewImage.imageUrl} alt="pet" />
        </ImageWrapper>
      ) : (
        <ImageWrapper>
          <img src={process.env.PUBLIC_URL + '/images/taskpaw.png'} alt="pet" />
        </ImageWrapper>
      )}
      <UploadWrapper>
        <AddButton className="upload-button" text="Upload photo" />
        <input
          type="file"
          accept="image/*"
          className="file-input"
          onChange={handleImageUpload}
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
  button {
    margin-top: 8px;
  }
`

const ImageWrapper = styled.div`
  text-align: center;
  img {
    height: 240px;
    width: 240px;
    border: 8px solid var(--tertiary);
    border-radius: 50%;
  }
`
