import React, {useState} from 'react'
import FileUpload from '../API/FileUpload';
import Progress from '../Progress';
import { addFolder } from '../API/Firestore';
import { UserAuth } from '../../context/AuthContext';

const UploadFiles = ({parentId}) => {

    const [isFileVisible, setIsFileVisible] = useState(false);
    const [isFolderVisible, setFolderVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const [folderName, setFolderName] = useState("");
    const {user} = UserAuth();
    console.log(user);
    console.log(user?.email)

    const handleUploadFile = async (event)=>{
        let file = event.target.files?.[0];
        console.log(file);
        FileUpload(file, setProgress, parentId, user.email);
    }

    const uploadFolder = () => {
        let payload = {
          folderName: folderName,
          isFolder: true,
          fileList: [],
          parentId: parentId || "",
          userEmail: user?.email,
        };
    
        addFolder(payload);
        setFolderName("");
      };
  return (
    <div>
    <div >
    <div className='flex flex-row p-4 container mx-auto'>
      {/* Upload */}
      <button onClick={() => {setIsFileVisible(!isFileVisible); setFolderVisible(false)}} className="btn btn-primary" >Add File</button>
      {isFileVisible && <input onChange={(event) => {handleUploadFile(event)}} type="file" className='file-input w-full max-w-xs' />}

      <button className="btn btn-outline btn-primary mx-3" onClick={() => {
          setIsFileVisible(false);
          setFolderVisible(!isFolderVisible);
        }}>Add a Folder</button>

{isFolderVisible ? (
        <>
          <input
            type="text"
            placeholder="Type here"
            value={folderName}
            onChange={(event) => setFolderName(event.target.value)}
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <button
            onClick={uploadFolder}
            className="btn btn-accent mx-2 text-white"
          >Create</button>
        </>
      ) : (
        <></>
      )}
      </div>
    </div>
    <div>
    {progress === 0 || progress === 100 ? (<></>): (
        <Progress progress={progress} />
        )}
        </div>
    </div>
  )
}

export default UploadFiles;
