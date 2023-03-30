const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/test1'
mongoose.connect(url, { useNewUrlParser: true })
const db = mongoose.connection

const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    surname: String,
}));
db.once('open', _ => {
    console.log('Database connected:', url)
})

db.on('error', err => {
    console.error('connection error:', err)
})
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        console.log(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
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