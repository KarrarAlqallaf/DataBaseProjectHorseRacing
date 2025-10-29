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
        <button>Guest</button> 
        <h1>Admin Home</h1>
        {/* this should be the first row */}
        <div> 
        <button onClick={() => navigate('/addrace')}>Add Race</button>
            <button>Delete Owner</button>
            <button>Move Horse</button>
            <button>New Trainer</button>
        </div>
        {/* this is the second row of buttons  */}
        <div>
        <button onClick={() => navigate('/races')}>Races</button>
        <button onClick={()=> navigate('/owners')}>Owners</button>
        <button onClick={()=> navigate('/stables')}>Stables</button>
        <button onClick={()=> navigate('/trainers')}>Trainers</button>

        </div>
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