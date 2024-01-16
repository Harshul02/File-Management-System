import React from 'react'
import { useParams } from 'react-router-dom'
import UploadFiles from '../components/files/UploadFiles';
import NavBar from '../components/NavBar';
import ShowFiles from '../components/showFiles/ShowFiles';

const FolderPage = () => {
    const parentId = useParams().id;
    // console.log(id);
  return (
    <div>
    <div>
    <NavBar />
    </div>
    <div className='mt-20'>
    <UploadFiles parentId={parentId} />
    </div>
    <div>
        <ShowFiles parentId={parentId} />
    </div>
    </div>
  )
}

export default FolderPage
