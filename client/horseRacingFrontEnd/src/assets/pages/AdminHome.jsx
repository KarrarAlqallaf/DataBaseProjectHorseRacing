import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Races from './Races'


const AdminHome = () => {
    const navigate = useNavigate()


  return (
    <div>
        {/* this button should return us to GuestHome  */}
        <button>Guest</button> 
        <h1>Admin Home</h1>
        {/* this should be the first row */}
        <div> 
            <button>Add Race</button>
            <button>Delete Owner</button>
            <button>Move Horse</button>
            <button>New Trainer</button>
        </div>
        {/* this is the second row of buttons  */}
        <div>
        <button onClick={() => navigate('/races')}>Races</button>
        <button>Owners</button>
        <button>Stables</button>
        <button>Trainers</button>

        </div>
        
    </div>
  )
}

export default AdminHome