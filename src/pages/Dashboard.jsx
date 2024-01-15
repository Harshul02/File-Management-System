import React from 'react'
import { UserAuth } from '../context/AuthContext'
import NavBar from '../components/NavBar';
import UploadFiles from '../components/files/UploadFiles';

const Dashboard = () => {

    const {user} = UserAuth();

  return (
    <div>
    <div>
    <NavBar />
    </div>
    <div className='mt-20'>
    <UploadFiles />
    </div>
    </div>
  )
}

export default Dashboard
