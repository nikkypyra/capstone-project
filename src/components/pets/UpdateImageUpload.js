import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import AddButton from '../buttons/AddButton'

UpdateImageUpload.propTypes = {
  petImage: PropTypes.object.isRequired,
  handleUpload: PropTypes.func.isRequired,
  onClick: PropTypes.func,
}

export default function UpdateImageUpload({ petImage, handleUpload, onClick }) {
  return (
    <>
      <ImageWrapper>
        <img src={petImage.imageUrl} alt="" />
      </ImageWrapper>
      <UploadWrapper>
        <AddButton
          className="upload-button"
          text="Upload photo"
          onClick={onClick}
        />
        <input
          type="file"
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
  button {
    margin-top: 8px;
  }
`

const ImageWrapper = styled.div`
  text-align: center;
  img {
    height: 200px;
    width: 200px;
    border: 8px solid var(--tertiary);
    border-radius: 50%;
  }
`
