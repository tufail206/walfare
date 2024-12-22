import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1> OOPS!!! 😑😐 </h1>
      <p>It seems that the page you're trying to access doesn't exist.</p>
          <button onClick={() => navigate('/')} className='py-3 px-4 bg-primary text-white rounded'>Go Back</button>
    </div>
  )
}

export default Error
