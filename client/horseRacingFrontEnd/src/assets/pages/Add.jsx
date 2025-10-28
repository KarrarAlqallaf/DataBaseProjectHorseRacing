import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {
    const [horse, setHorse] = useState({
        horseId: "",
        horseName: "",
        age: "",
        gender: "",
        registration: "",
        stableId: ""
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setHorse(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/horse", horse)
            navigate('/')
            console.log("add has been presed")
        }catch(err){
            console.log(err)
        }

    }

    console.log(horse)
    return (
        <div className='form'>
            <h1>add new horse</h1>
            <input type="text" placeholder='horseId' onChange={handleChange} name='horseId' />
            <input type="text" placeholder='horseName' onChange={handleChange} name='horseName' />
            <input type="number" placeholder='age' onChange={handleChange} name='age' />
            <input type="text" placeholder='gender' onChange={handleChange} name='gender' />
            <input type="number" placeholder='registration' onChange={handleChange} name='registration' />
            <input type="text" placeholder='stableId' onChange={handleChange} name='stableId' />
            <button onClick={handleClick}>add</button>
        </div>

    )
}

export default Add