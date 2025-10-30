import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function NewTrainer() {
  const [trainer, setTrainer] = useState({
    trainerId: '',
    lname: '',
    fname: '',
    stableId: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setTrainer(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8800/trainer', trainer)
      navigate('/trainers')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='form column'>
      <h1>Add New Trainer</h1>
      <div className="row">
        <input type='text' placeholder='Trainer ID' name='trainerId' value={trainer.trainerId} onChange={handleChange} />
        <input type='text' placeholder='Last Name' name='lname' value={trainer.lname} onChange={handleChange} />
        <input type='text' placeholder='First Name' name='fname' value={trainer.fname} onChange={handleChange} />
        <input type='text' placeholder='Stable ID' name='stableId' value={trainer.stableId} onChange={handleChange} />
      <button onClick={handleSubmit}>Add Trainer</button>
      </div>
      
    </div>
  )
}

export default NewTrainer


