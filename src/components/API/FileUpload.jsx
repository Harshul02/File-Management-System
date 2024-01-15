import React from 'react'
import { ref, getDownloadURL, uploadBytesResumable, uploadBytes } from "firebase/storage";
import { storage } from '../../firebase';
import { addFiles } from './Firestore';

const FileUpload = (file, setProgress) => {
    const storageRef = ref(storage, `files/${file.name}`);
    console.log(storageRef);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            addFiles(downloadURL, file.name);
        });
      }
    );
}

export default FileUpload
