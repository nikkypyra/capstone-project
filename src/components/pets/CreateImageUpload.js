import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import AddButton from '../buttons/AddButton'
import pawSrc from '../../images/taskpaw.png'

CreateImageUpload.propTypes = {
  previewImage: PropTypes.object.isRequired,
  handleImageUpload: PropTypes.func.isRequired,
  loading: PropTypes.number,
}

export default function CreateImageUpload({
  previewImage,
  handleImageUpload,
  loading,
}) {
  return (
    <>
      {previewImage.imageUrl ? (
        <ImageWrapper>
          <img src={previewImage.imageUrl} alt="" />
        </ImageWrapper>
      ) : (
        <ImageWrapper>
          <img src={pawSrc} alt="" />
        </ImageWrapper>
      )}
      <UploadWrapper>
        {loading > 0 && <span>Upload is {Math.trunc(loading)}% done</span>}
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
  flex-direction: column;
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
