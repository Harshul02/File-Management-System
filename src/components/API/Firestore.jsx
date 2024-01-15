import React, { useEffect, useState } from 'react'
import { collection, addDoc, doc, updateDoc, getDoc, onSnapshot } from "firebase/firestore";
import { database } from '../../firebase';

const files = collection(database, "files");

export const addFiles = (imageLink) => {
    try {
        addDoc(files, {
          imageLink: imageLink,
        });
      } catch (err) {
        console.log(err);
      }
}
