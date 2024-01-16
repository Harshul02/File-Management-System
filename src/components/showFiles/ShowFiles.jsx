import React from 'react'
import FetchFiles from '../hooks/FetchFiles'
import { AiFillFolder } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { MdDeleteOutline } from "react-icons/md";
import { doc, deleteDoc, collection } from "firebase/firestore";
import { database, storage  } from '../../firebase';
import { ref, deleteObject } from 'firebase/storage';

const ShowFiles = ({parentId}) => {
    const navigate = useNavigate();
    const {user} = UserAuth();
    // console.log(user, user.email)
    const {fileList} = FetchFiles(parentId, user.email);
    // console.log(fileList);

    const files = collection(database, "files");
    

    const openFile = (fileLink) => {
        window.open(fileLink);
      };

      const handleDelete = async (file) =>{
        // console.log(file)
        // const storageRef = ref(storage, `files/${file.imageName}`);
        // await deleteObject(storageRef).then(() => {
        //    alert("File Deteted Successfully")
        //  }).catch((error) => {
        //    alert(error)
        //  });
         await deleteDoc(doc(files, file.id)).catch((error) => {alert(error)});
      }
      
  return (
    <div>
    <div className='flex flex-wrap items-center space-x-4 justify-center mt-4 container mx-auto'>
      {fileList.map((file, index) => (
        <div>
        <button className='absolute mt-5 ml-4 text-white' onClick={() => {handleDelete(file)}}><MdDeleteOutline size={25}/></button>
        <div key={file.id} className='bg-[#b0cdf5] flex items-center justify-center rounded mx-4 mt-5' style={{ width: '200px', height: '200px', objectFit: 'cover', cursor: "pointer", color: "white" }} onClick={()=>{file.isFolder ? navigate(`/folder/${file.id}`) : openFile(file.imageLink)}}>
          {/* <img
            src={file.imageLink}
            alt={`Img ${index + 1}`}
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          /> */}
          {file.isFolder ? <AiFillFolder size={80} /> : <img
            src={file.imageLink}
            alt={`Img ${index + 1}`}
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          /> }
        </div>
        <p className='flex justify-center text-gray-500'>{file.isFolder ? file.folderName : file.imageName}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ShowFiles
