import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const data = useParams()
  return (
    <div className='my-4 p-4 w-full h-40 bg-gray-500 text-center text-3xl'>Userid : {data.id}</div>
  )
}

export default User