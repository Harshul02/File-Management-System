import { collection, addDoc } from "firebase/firestore";
import { database } from '../../firebase';

const files = collection(database, "files");

export const addFiles = (imageLink, imageName) => {
    try {
        addDoc(files, {
          imageLink: imageLink,
          imageName: imageName,
          isFolder: false,
        });
      } catch (err) {
        console.log(err);
      }
}

export const addFolder = (payload) => {
    try {
      addDoc(files, {
        ...payload,
      });
    } catch (err) {
      console.log(err);
    }
  };