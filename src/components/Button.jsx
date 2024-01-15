import React from 'react'

const Button = ({btnClass, title, onClick}) => {
  return (
    <button onClick={onClick} className={`btn ${btnClass}`}>{title}</button>
  )
}

export default Button
