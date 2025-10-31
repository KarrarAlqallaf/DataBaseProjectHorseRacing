import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddRaceResults() {
    const [race, setRaceResutls] = useState({
        raceId: "",
        horseId: "",
        resutls: "",
        prize: "",
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setRaceResutls(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/raceresults", race)
            navigate('/adminHome')
            console.log("race results has been added")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(race)
    return (
        
        <div className='form column'>
            <h1>Add New Race</h1>
            <div className='row'>
            <input type="text" placeholder='Race ID' onChange={handleChange} name='raceId' />
            <input type="text" placeholder='Horse ID' onChange={handleChange} name='horseId' />
            <input type="text" placeholder='Results' onChange={handleChange} name='resutls' />
            <input type="date" placeholder='Prize' onChange={handleChange} name='prize' />
            <button onClick={handleClick}>Add Race Results</button>
            </div>
        </div>
    )
}

export default AddRaceResults