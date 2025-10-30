import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../../App.css'
import { useNavigate } from "react-router-dom"
const Trainers = () => {
    const navigate = useNavigate()
    const [data,setData] = useState([])

    useEffect(() => {
        const fetchALLData = async () => {
          try {
            const res = await axios.get('http://localhost:8800/trainer')
            setData(res.data) 
          } catch (err) {
            console.log(err)
          }
        }
        fetchALLData() 
      }, [])
  return (
    <div>
   <h1>Trainers</h1> 
   <table className='styled-table'>
    <thead>
        <tr>
        <th>Trainer ID</th>
        <th>Last Name</th>
        <th>First Name</th>
        <th>Stable ID</th>
        </tr>
    </thead>
    <tbody>
        {data.map((d) => (
        <tr key={d.trainerId}>
            <td>{d.trainerId}</td>
            <td>{d.lname}</td>
            <td>{d.fname}</td>
            <td>{d.stableId}</td>
        </tr>
        ))}
    </tbody>
    </table>
</div>
  )
}

export default Trainers