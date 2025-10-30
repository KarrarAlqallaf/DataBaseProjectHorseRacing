import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../../App.css'
import { useNavigate } from "react-router-dom"


export const Stables = () => {
    const navigate = useNavigate()
    const [data,setData] = useState([])

    useEffect(() => {
        const fetchALLData = async () => {
          try {
            const res = await axios.get('http://localhost:8800/stable')
            setData(res.data) 
          } catch (err) {
            console.log(err)
          }
        }
        fetchALLData() 
      }, [])
  return (
    <div>
   <h1>Stables</h1> 
   <table className='styled-table'>
    <thead>
        <tr>
        <th>Stable ID</th>
        <th>Stable Name</th>
        <th>location</th>
        <th>colors</th>
        </tr>
    </thead>
    <tbody>
        {data.map((d) => (
        <tr key={d.stableId}>
            <td>{d.stableId}</td>
            <td>{d.stableName}</td>
            <td>{d.location}</td>
            <td>{d.colors}</td>
        </tr>
        ))}
    </tbody>
    </table>
</div>
  )
}
