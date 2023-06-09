require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const tasksRoutes = require('./routes/tasks')
const userRoutes = require('./routes/user')
const stripe = require('./routes/stripe')
//express app
const app = express()

// middleware
app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
// app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)
app.use('/api/tasks',tasksRoutes)
app.use('/api/stripe',stripe)
//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
    
        app.listen(process.env.PORT, ()=>{
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error);
    })

//listen for requests, PORT jest z .env pliku 


