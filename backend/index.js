import express from "express" 
import mysql from "mysql2" 
import cors from "cors"

const app = express()
app.use(express.json())
const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "v2$cqvJHPdnhufR2kSEe",
    database: "hourse_racing"
})
app.use(cors())

app.listen(8800, ()=>{
  console.log("Connected to backend!")
})



app.get("/",(req,res)=>{
    res.json("hello this is the backend")
})

app.get("/stable", (req,res)=>{
    const q = "SELECT * FROM stable"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)      
    })
})
app.get("/horse", (req,res)=>{
    const q = "SELECT * FROM horse"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)      
    })
})

app.get("/owner", (req,res)=>{
    const q = "SELECT * FROM owner"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)      
    })
})

app.get("/owns", (req,res)=>{
    const q = "SELECT * FROM owns"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)      
    })
})

app.get("/trainer", (req,res)=>{
    const q = "SELECT * FROM trainer"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)      
    })
})

app.get("/track", (req,res)=>{
    const q = "SELECT * FROM track"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)      
    })
})

app.get("/race", (req,res)=>{
    const q = "SELECT * FROM race"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)      
    })
})

app.get("/raceresults", (req,res)=>{
    const q = "SELECT * FROM raceresults"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)      
    })
})



app.post("/horse", (req,res)=>{
    const q = "INSERT INTO Horse (horseId, horseName, age, gender, registration, stableId) VALUES (?)"
    const VALUES = [
        req.body.horseId,
        req.body.horseName,
        req.body.age,
        req.body.gender,
        req.body.registration,
        req.body.stableId,
    ];
    db.query(q,[VALUES],(err,data) =>{
        if(err) return res.json(err)
            return res.json("horse has been added succesfully")      
    } )
})

// Stable: create a stable
app.post("/stable", (req, res) => {
    const { stableId, stableName, location, colors } = req.body
    const q = "INSERT INTO Stable (stableId, stableName, location, colors) VALUES (?, ?, ?, ?)"
    db.query(q, [stableId, stableName, location, colors], (err) => {
      if (err) return res.status(500).json(err)
      res.json({ message: "stable created", stableId })
    })
  })
  
  // Owner: create an owner
  app.post("/owner", (req, res) => {
    const { ownerId, lname, fname } = req.body
    const q = "INSERT INTO Owner (ownerId, lname, fname) VALUES (?, ?, ?)"
    db.query(q, [ownerId, lname, fname], (err) => {
      if (err) return res.status(500).json(err)
      res.json({ message: "owner created", ownerId })
    })
  })
  
  // Owner: delete by id
  app.delete("/owner/:ownerId", (req, res) => {
    const { ownerId } = req.params
    // Delete dependent rows first to satisfy FK constraints
    const deleteOwns = "CALL delete_owner_and_related(?)"
    db.query(deleteOwns, [ownerId], (err) => {
      if (err) return res.status(500).json(err)
        res.json({ message: "owner deleted", ownerId })
    })
  })
  
  // Horse: create a horse
  app.post("/horse", (req, res) => {
    const { horseId, horseName, age, gender, registration, stableId } = req.body
    const q = "INSERT INTO Horse (horseId, horseName, age, gender, registration, stableId) VALUES (?, ?, ?, ?, ?, ?)"
    db.query(q, [horseId, horseName, age, gender, registration, stableId], (err) => {
      if (err) return res.status(500).json(err)
      res.json({ message: "horse created", horseId })
    })
  })
  
  // Owns: link owner to horse
  app.post("/owns", (req, res) => {
    const { ownerId, horseId } = req.body
    const q = "INSERT INTO Owns (ownerId, horseId) VALUES (?, ?)"
    db.query(q, [ownerId, horseId], (err) => {
      if (err) return res.status(500).json(err)
      res.json({ message: "relation created", ownerId, horseId })
    })
  })
  
  // Trainer
  app.post("/trainer", (req, res) => {
    const { trainerId, lname, fname, stableId } = req.body
    const q = "INSERT INTO Trainer (trainerId, lname, fname, stableId) VALUES (?, ?, ?, ?)"
    db.query(q, [trainerId, lname, fname, stableId], (err) => {
      if (err) return res.status(500).json(err)
      res.json({ message: "trainer created", trainerId })
    })
  })
  
  // Track
  app.post("/track", (req, res) => {
    const { trackName, location, length } = req.body
    const q = "INSERT INTO Track (trackName, location, length) VALUES (?, ?, ?)"
    db.query(q, [trackName, location, length], (err) => {
      if (err) return res.status(500).json(err)
      res.json({ message: "track created", trackName })
    })
  })
  
  // Race
  app.post("/race", (req, res) => {
    const { raceId, raceName, trackName, raceDate, raceTime } = req.body
    const q = "INSERT INTO Race (raceId, raceName, trackName, raceDate, raceTime) VALUES (?, ?, ?, ?, ?)"
    db.query(q, [raceId, raceName, trackName, raceDate, raceTime], (err) => {
      if (err) return res.status(500).json(err)
      res.json({ message: "race created", raceId })
    })
  })
  
  // RaceResults
  app.post("/raceresults", (req, res) => {
    const { raceId, horseId, results, prize } = req.body
    const q = "INSERT INTO RaceResults (raceId, horseId, results, prize) VALUES (?, ?, ?, ?)"
    db.query(q, [raceId, horseId, results, prize], (err) => {
      if (err) return res.status(500).json(err)
      res.json({ message: "result created", raceId, horseId })
    })
  })

  // Move Horse to a different stable (checks FK constraint)
  app.put("/horse/:horseId/move", (req, res) => {
    const { horseId } = req.params
    const { stableId } = req.body
    if (!stableId) return res.status(400).json({ message: "stableId is required" })

    // Verify target stable exists to avoid FK error
    const checkStable = "SELECT 1 FROM Stable WHERE stableId = ? LIMIT 1"
    db.query(checkStable, [stableId], (err, rows) => {
      if (err) return res.status(500).json(err)
      if (rows.length === 0) return res.status(404).json({ message: "target stable not found" })

      const updateHorse = "UPDATE Horse SET stableId = ? WHERE horseId = ?"
      db.query(updateHorse, [stableId, horseId], (err, result) => {
        if (err) return res.status(500).json(err)
        if (result.affectedRows === 0) return res.status(404).json({ message: "horse not found" })
        res.json({ message: "horse moved", horseId, stableId })
      })
    })
  })

// ========== Guest browse APIs ==========
// 1) Horses (name, age) and trainer names owned by people given last name
app.get("/guest/horses-by-owner", (req, res) => {
    const { lname } = req.query;
    if (!lname) return res.status(400).json({ message: "lname query param is required" });

    db.query("CALL GetHorsesByOwnerLastName(?)", [lname], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result[0]); // Stored procedures return result in result[0]
    });
})

// 2) Trainers who have trained winners; include trainer, horse, race details
app.get("/guest/winner-trainers", (req, res) => {
  const q = `CALL GetTrainersWithWinners()
  `
  db.query(q, (err, rows) => {
    if (err) return res.status(500).json(err)
    res.json(rows[0])
  })
})

// 3) Trainer total winnings, sorted by winnings desc
app.get("/guest/trainer-winnings", (req, res) => {
  const q = `CALL GetTrainerWinnings()`
  db.query(q, (err, rows) => {
    if (err) return res.status(500).json(err)
    res.json(rows[0])
  })
})

// 4) Track stats: count of races and total horses participating on the track
app.get("/guest/track-stats", (req, res) => {
  const q = `CALL GetTrackStatistics()`;
  db.query(q, (err, rows) => {
    if (err) return res.status(500).json(err)
    res.json(rows[0])
  })
})

