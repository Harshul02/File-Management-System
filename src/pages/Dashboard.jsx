import React from 'react'
import NavBar from '../components/NavBar';
import UploadFiles from '../components/files/UploadFiles';
import ShowFiles from '../components/showFiles/ShowFiles';

const Dashboard = () => {

  return (
    <div>
    <div>
    <NavBar />
    </div>
    <div className='mt-20'>
    <UploadFiles parentId=''/>
    </div>
    <div>
        <ShowFiles parentId=''/>
    </div>
    </div>
  )
}

export default Dashboard
