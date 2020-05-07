import React from 'react'
import styled from 'styled-components/macro'
import AddButton from './AddButton'
import PropTypes from 'prop-types'

ImageUpload.propTypes = {
  previewImage: PropTypes.object,
  onChange: PropTypes.func,
}

export default function ImageUpload({ onChange, previewImage }) {
  return (
    <>
      {previewImage.imageUrl ? (
        <ContainerWrapper>
          <ImageContainer src={previewImage.imageUrl} alt="" />
        </ContainerWrapper>
      ) : (
        <ImagePlaceholder>
          <img src={process.env.PUBLIC_URL + '/images/taskpaw.png'} alt="" />
        </ImagePlaceholder>
      )}
      <UploadWrapper>
        <ImageUploadStyled htmlFor="imageSrc">
          <AddButton className="upload-button" text="Upload photo*" />
        </ImageUploadStyled>
        <input
          type="file"
          name="imageSrc"
          accept="image/*"
          className="file-input"
          onChange={onChange}
          required
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
const ImageUploadStyled = styled.label``

const ImagePlaceholder = styled.div`
  text-align: center;
  img {
    height: 240px;
    width: 240px;
    border: 8px solid var(--tertiary);
    border-radius: 50%;
  }
`
const ContainerWrapper = styled.section`
  text-align: center;
`
const ImageContainer = styled.img`
  background: center url(${(props) => props.image});
  height: 240px;
  width: 240px;
  border: 8px solid var(--tertiary);
  border-radius: 50%;
`
