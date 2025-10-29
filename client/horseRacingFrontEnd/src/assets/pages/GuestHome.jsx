import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../../App.css'

const GuestHome = () => {
  const [lname, setLname] = useState("")
  const [horsesByOwner, setHorsesByOwner] = useState([])
  const [winnerTrainers, setWinnerTrainers] = useState([])
  const [trainerWinnings, setTrainerWinnings] = useState([])
  const [trackStats, setTrackStats] = useState([])

  const searchHorses = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/guest/horses-by-owner`, { params: { lname } })
      setHorsesByOwner(res.data)
    } catch (e) { console.log(e) }
  }

  const loadWinnerTrainers = async () => {
    try {
      const res = await axios.get('http://localhost:8800/guest/winner-trainers')
      setWinnerTrainers(res.data)
    } catch (e) { console.log(e) }
  }

  const loadTrainerWinnings = async () => {
    try {
      const res = await axios.get('http://localhost:8800/guest/trainer-winnings')
      setTrainerWinnings(res.data)
    } catch (e) { console.log(e) }
  }

  const loadTrackStats = async () => {
    try {
      const res = await axios.get('http://localhost:8800/guest/track-stats')
      setTrackStats(res.data)
    } catch (e) { console.log(e) }
  }

  return (
    <div>
      <h1>Guest</h1>

      <h2>Horses by Owner Last Name</h2>
      <div style={{ marginBottom: 12 }}>
        <input type='text' placeholder='Owner last name' value={lname} onChange={(e)=> setLname(e.target.value)} />
        <button onClick={searchHorses} style={{ marginLeft: 8 }}>Search</button>
      </div>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>Horse Name</th>
            <th>Age</th>
            <th>Trainer</th>
          </tr>
        </thead>
        <tbody>
          {horsesByOwner.map((r) => (
            <tr key={`${r.horseId}-${r.trainerId}`}>
              <td>{r.horseName}</td>
              <td>{r.age}</td>
              <td>{r.trainerFname} {r.trainerLname}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Winner Trainers</h2>
      <button onClick={loadWinnerTrainers}>Load</button>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>Trainer</th>
            <th>Winning Horse</th>
            <th>Winning Race</th>
          </tr>
        </thead>
        <tbody>
          {winnerTrainers.map((r) => (
            <tr key={`${r.trainerId}-${r.horseId}-${r.raceId}`}>
              <td>{r.trainerFname} {r.trainerLname}</td>
              <td>{r.horseName}</td>
              <td>{r.raceName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Trainer Winnings</h2>
      <button onClick={loadTrainerWinnings}>Load</button>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>Trainer</th>
            <th>Total Winnings</th>
          </tr>
        </thead>
        <tbody>
          {trainerWinnings.map((r) => (
            <tr key={r.trainerId}>
              <td>{r.trainerFname} {r.trainerLname}</td>
              <td>{r.totalWinnings}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Track Stats</h2>
      <button onClick={loadTrackStats}>Load</button>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>Track</th>
            <th>Races Held</th>
            <th>Total Participants</th>
          </tr>
        </thead>
        <tbody>
          {trackStats.map((r) => (
            <tr key={r.trackName}>
              <td>{r.trackName}</td>
              <td>{r.raceCount}</td>
              <td>{r.totalParticipants}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GuestHome