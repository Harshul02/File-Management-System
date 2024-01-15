import React from 'react'
import FetchFiles from '../hooks/FetchFiles'

const ShowFiles = () => {
    const {fileList} = FetchFiles();
    console.log(fileList);
  return (
    <div>
    <div className='flex items-center space-x-4 justify-center'>
      {fileList.map((file, index) => (
        <div key={index}>
          <img
            src={file.imageLink}
            alt={`Img ${index + 1}`}
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
    </div>
  )
}

export default ShowFiles
