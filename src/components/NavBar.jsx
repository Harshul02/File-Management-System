import React from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const {user, logOut} = UserAuth();
  const navigate = useNavigate();
  // console.log(user);

  const handleLogout = async () =>{
    try{
      await logOut();
      navigate('/');
    }
    catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      

      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://play-lh.googleusercontent.com/2oyw6who4WdYH2INRG1qoYS3nvC0hWOHlGC50GEADfhnXonDrCLKg_eEVT5fWqAK4ME" className="h-10" alt="Flowbite Logo" />
            <span className="mx-4 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">File Manager</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            {user ? (<>
                <Link to={'/dashboard'}>
            <button type="button" className="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dashboard</button>
            </Link>
                <button onClick={handleLogout} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
            </>
            ): (
            <div>
          <Link to={'/login'}>
            <button type="button" className="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </Link>
            <Link to={'/signup'}>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
            </Link>
            </div>
            )}
          </div>
        </div>
      </nav>

    </div>
  )
}

export default NavBar
