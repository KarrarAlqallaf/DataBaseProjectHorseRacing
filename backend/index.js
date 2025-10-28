import express from "express" 
import mysql from "mysql2" 
import cors from "cors"

const app = express()
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "v2$cqvJHPdnhufR2kSEe",
    database: "hourse_racing"
})
app.use(cors())



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



app.listen(8800, ()=>{
    console.log("Connected to backend!")
})