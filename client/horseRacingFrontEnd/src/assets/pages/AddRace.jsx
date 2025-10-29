import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddRace() {
    const [race, setRace] = useState({
        raceId: "",
        raceName: "",
        trackName: "",
        raceDate: "",
        raceTime: ""
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setRace(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/race", race)
            navigate('/adminHome')
            console.log("race has been added")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(race)
    return (
        <div className='form'>
            <h1>Add New Race</h1>
            <input type="text" placeholder='Race ID' onChange={handleChange} name='raceId' />
            <input type="text" placeholder='Race Name' onChange={handleChange} name='raceName' />
            <input type="text" placeholder='Track Name' onChange={handleChange} name='trackName' />
            <input type="date" placeholder='Race Date' onChange={handleChange} name='raceDate' />
            <input type="time" placeholder='Race Time' onChange={handleChange} name='raceTime' />
            <button onClick={handleClick}>Add Race</button>
        </div>
    )
}

export default AddRace