import { useEffect, useState } from 'react'
import axios from 'axios'

const Horse = () => {
  const [horses, setHorses] = useState([])

  useEffect(() => {
    const fetchALLHorses = async () => {
      try {
        const res = await axios.get('http://localhost:8800/horse')
        setHorses(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchALLHorses() 
  }, [])

  return (
    <div>
      <h1>this page shows all horses in the data base</h1>
      {horses.map((h) => (
        <div className='table' key={h.raceId}>
          <h2>{h.horseId}</h2>
          <h2>{h.horseName}</h2>
        </div>
      ))}
    </div>
  )
}

export default Horse