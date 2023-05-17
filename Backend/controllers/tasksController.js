const Workout = require('../models/taskModel')
const mongoose = require('mongoose')


const addTask = async (req, res) => {
    try {
        const { content, cost, date, languages, authorEmail } = req.body;

        // Sprawdź, czy autor istnieje w bazie danych na podstawie adresu e-mail
        const author = await User.findOne({ email: authorEmail });

        if (!author) {
        return res.status(404).json({ error: 'Nie znaleziono autora' });
        }

        // Utwórz nowe zadanie na podstawie przekazanych danych
        const newTask = new Task({
        content,
        _id_autora: author._id,
        _id_zatrudnionego: null, // Początkowo puste
        koszt: cost,
        data: date,
        languages,
        chat: null
        });

        // Zapisz nowe zadanie w bazie danych
        const savedTask = await newTask.save();

        res.status(201).json(savedTask);
    } catch (error) {
        console.error('Błąd dodawania zadania', error);
        res.status(500).json({ error: 'Wystąpił błąd serwera' });
    }
}

const getTasks = async (req, res) => {
    // to compile
}



// get all workouts
const getWorkouts = async (req, res) => {
    const user_id = req.user._id

    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 })

    res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}


// create new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!load) {
        emptyFields.push('load')
    }
    if (!reps) {
        emptyFields.push('reps')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add doc to db
    try {
        const user_id = req.user._id
        const workout = await Workout.create({ title, load, reps, user_id })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const workout = await Workout.findOneAndDelete({ _id: id })

    if (!workout) {
        return res.status(400).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!workout) {
        return res.status(400).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}


module.exports = {
    addTask,
    getTasks
}