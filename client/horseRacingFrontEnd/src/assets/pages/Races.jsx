import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../../App.css'
import { useNavigate } from "react-router-dom"


const Races = () => {
    const navigate = useNavigate()

    const [races,setRaces] = useState([])

    useEffect(() => {
        const fetchALLRaces = async () => {
          try {
            const res = await axios.get('http://localhost:8800/race')
            setRaces(res.data) 
          } catch (err) {
            console.log(err)
          }
        }
        fetchALLRaces() 
      }, [])

  return (
    
    <div>
       <h1>Races</h1> 
       <table className='styled-table'>
        <thead>
            <tr>
            <th>Race ID</th>
            <th>Race Name</th>
            <th>Track Name</th>
            <th>Date</th>
            <th>Time</th>
            </tr>
        </thead>
        <tbody>
            {races.map((r) => (
            <tr key={r.raceId}>
                <td>{r.raceId}</td>
                <td>{r.raceName}</td>
                <td>{r.trackName}</td>
                <td>{r.raceDate}</td>
                <td>{r.raceTime}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  )
}

export default Races