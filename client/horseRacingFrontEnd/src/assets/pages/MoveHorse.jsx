import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function MoveHorse() {
  const [form, setForm] = useState({ horseId: '', stableId: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.horseId || !form.stableId) return
    try {
      await axios.put(`http://localhost:8800/horse/${form.horseId}/move`, { stableId: form.stableId })
      navigate('/adminHome')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='form'>
      <h1>Move Horse</h1>
      <input type="text" placeholder='Horse ID' name='horseId' value={form.horseId} onChange={handleChange} />
      <input type="text" placeholder='New Stable ID' name='stableId' value={form.stableId} onChange={handleChange} />
      <button onClick={handleSubmit}>Move</button>
    </div>
  )
}

export default MoveHorse