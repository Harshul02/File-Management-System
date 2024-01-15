import React from 'react'

const Progress = ({progress}) => {
  return (
    <div>
    <div className="px-4">
      <progress className="progress progress-primary w-full" value={progress} max="100"></progress>
      </div>
    </div>
  )
}

export default Progress
