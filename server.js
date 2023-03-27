const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'ejs')
// app.use(logger)

app.get('/',(req, res) => {
    // console.log('Here')
    // res.status(500).send("Hi")
    // res.download('server.js')
    res.render('index',{text: 'World'})
    // res.status(500).json({message: "Error"})
    // res.send("Hi")
})

const userRouter = require('./routes/users')

app.use('/users',userRouter)

app.listen(3000)