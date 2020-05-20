import { storage } from '../../firebase'
import { useState } from 'react'
import pawSrc from '../../images/taskpaw.png'

export default function usePhoto() {
  const [previewImage, setPreviewImage] = useState({
    imageUrl: pawSrc,
    imageName: 'taskpaw.png',
  })

  function handleImageUpload(event) {
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
            setPreviewImage({ imageUrl: url, imageName: image.name })
          })
      }
    )
  }

  return { previewImage, setPreviewImage, handleImageUpload }
}
