import React from 'react'
import { ref, getDownloadURL, uploadBytesResumable, uploadBytes } from "firebase/storage";
import { storage } from '../../firebase';

const FileUpload = (file) => {
    const storageRef = ref(storage, `files/${file.name}`);
    console.log(storageRef);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        alert(error);
      },
      (error) =>{
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
        });
      }
    );
}

export default FileUpload
