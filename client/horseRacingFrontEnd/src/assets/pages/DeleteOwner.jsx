import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function DeleteOwner() {
  const [ownerId, setOwnerId] = useState("")
  const navigate = useNavigate()

  const handleDelete = async (e) => {
    e.preventDefault()
    if (!ownerId) return
    try {
      await axios.delete(`http://localhost:8800/owner/${ownerId}`)
      navigate('/owners')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='form'>
        <button onClick={() => navigate('/adminHome')}>Admin Home</button>
      <h1>Delete Owner</h1>
      <input
        type="text"
        placeholder='Owner ID'
        value={ownerId}
        onChange={(e)=> setOwnerId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteOwner