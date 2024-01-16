import React from 'react';
import NavBar from '../components/NavBar';

const HomePage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="mt-20 container mx-auto h-full">
        <div className="grid grid-cols-2 gap-4 p-4 mt-4 h-full relative" style={{marginTop: "200px"}}>
          {/* Left div with centered text */}
          <div className="flex items-center justify-center ">
            <h2 className="text-7xl font-medium italic mx-4">Welcome to File Manager</h2>
          </div>

          {/* Right div with a centered image */}
          <div className="flex items-center justify-center ">
            <img
              src="https://play-lh.googleusercontent.com/2oyw6who4WdYH2INRG1qoYS3nvC0hWOHlGC50GEADfhnXonDrCLKg_eEVT5fWqAK4ME"
              alt="Image Alt Text"
            //   className="w-full h-full"
              style={{ width: '40%', height: '100%' }}
            />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 w-full mt-auto'>
      <div className="text-xl py-8 bg-blue-300 text-center text-white h-full" style={{fontFamily: "'Salsa', cursive"}}>
        <footer>
          Made with <span style={{color: "red"}}>❤</span> by Harshul Jain
        </footer>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
