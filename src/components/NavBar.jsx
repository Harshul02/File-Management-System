import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      

      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://img.freepik.com/free-vector/yellow-house_1110-691.jpg?w=740&t=st=1700549866~exp=1700550466~hmac=49ba49076a52603bc22a57463b23bf0eed2208a2aa7384bf04ebb09474dd5854" className="h-10" alt="Flowbite Logo" />
            <span className="mx-4 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">File Manager</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to={'/login'}>
            <button type="button" className="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </Link>
            <Link to={'/signup'}>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default NavBar
