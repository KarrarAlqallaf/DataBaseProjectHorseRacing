import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../../App.css'
import { useNavigate } from "react-router-dom"

const Owners = () => {

    const navigate = useNavigate()

    const [data,setOwners] = useState([])

    useEffect(() => {
        const fetchALLOwners = async () => {
          try {
            const res = await axios.get('http://localhost:8800/owner')
            setOwners(res.data) 
          } catch (err) {
            console.log(err)
          }
        }
        fetchALLOwners() 
      }, [])

  return (
    <div>
   <h1>Owners</h1> 
   <table className='styled-table'>
    <thead>
        <tr>
        <th>Owner ID</th>
        <th>Last Name</th>
        <th>First Name</th>
        </tr>
    </thead>
    <tbody>
        {data.map((d) => (
        <tr key={d.ownerId}>
            <td>{d.ownerId}</td>
            <td>{d.lname}</td>
            <td>{d.fname}</td>
        </tr>
        ))}
    </tbody>
    </table>
</div>

)
}

export default Owners