import { storage } from '../../firebase'
import { useState } from 'react'

export default function usePhoto() {
  const [previewImage, setPreviewImage] = useState({
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/pawlog-app.appspot.com/o/images%2Ftaskpaw.png?alt=media&token=8ad10974-93e4-4fd7-ae05-1567d049ad1f',
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
