import React from 'react'
import { UserAuth } from '../context/AuthContext'
import NavBar from '../components/NavBar';

const Dashboard = () => {

    const {user} = UserAuth();

  return (
    <div>
      <NavBar />
    </div>
  )
}

export default Dashboard
