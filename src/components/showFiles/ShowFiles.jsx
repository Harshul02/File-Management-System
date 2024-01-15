import React from 'react'
import FetchFiles from '../hooks/FetchFiles'
import { AiFillFolder } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const ShowFiles = () => {
    const navigate = useNavigate();

    const {fileList} = FetchFiles();
    console.log(fileList);


    const openFile = (fileLink) => {
        window.open(fileLink);
      };
    

  return (
    <div>
    <div className='flex flex-wrap items-center space-x-4 justify-center mt-4 container mx-auto'>
      {fileList.map((file, index) => (
        <div>
        <div key={index} className='bg-[#b0cdf5] flex items-center justify-center rounded mx-4 mt-5 p-5' style={{ width: '200px', height: '200px', objectFit: 'cover', cursor: "pointer", color: "white" }} onClick={()=>{file.isFolder ? navigate(`/folder/${file.id}`) : openFile(file.imageLink)}}>
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
