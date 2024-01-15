import React, {useState} from 'react'
import FileUpload from '../API/FileUpload';

const UploadFiles = () => {

    const [file, setFile] = useState({});
    const [isFileVisible, setIsFileVisible] = useState(false);

    const handleUploadFile = async (event)=>{
        let file = event.target.files?.[0];
        console.log(file);
        FileUpload(file);
    }
  return (
    <div className='flex flex-row p-4'>
      {/* Upload */}
      <button onClick={() => {setIsFileVisible(!isFileVisible)}} className="btn btn-primary" >Add File</button>
      {isFileVisible && <input onChange={(event) => {handleUploadFile(event)}} type="file" className='file-input w-full max-w-xs' />}
      <button className="btn btn-outline btn-primary mx-3" >Add a Folder</button>

    </div>
  )
}

export default UploadFiles;
