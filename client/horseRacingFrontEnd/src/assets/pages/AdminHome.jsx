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
        <button onClick={() => navigate('/addrace')}>Add Race</button>
        <button onClick={() => navigate('/deleteOwner')}>Delete Owner</button>
            <button onClick={() => navigate('/moveHorse')}>Move Horse</button>
            <button>New Trainer</button>
        </div>
        {/* this is the second row of buttons  */}
        <div>
        <button onClick={() => navigate('/races')}>Races</button>
        <button onClick={()=> navigate('/owners')}>Owners</button>
        <button onClick={()=> navigate('/stables')}>Stables</button>
        <button onClick={()=> navigate('/trainers')}>Trainers</button>

        </div>
        
    </div>
  )
}

export default AdminHome