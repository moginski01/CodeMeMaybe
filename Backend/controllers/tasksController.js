const Task = require('../models/taskModel')
const mongoose = require('mongoose')
const User = require('../models/userModel')

const addTask = async (req, res) => {
    try {
        const { content, cost, languages, authorEmail } = req.body;
        // Sprawdź, czy autor istnieje w bazie danych na podstawie adresu e-mail
        // console.log("here1")
        const author = await User.findOne({ email: authorEmail });
        // console.log("here2")

        if (!author) {
        return res.status(404).json({ error: 'Nie znaleziono autora' });
        }

        const currentDate = new Date();
        const polishDate = new Date(currentDate.getTime() + (2 * 60 * 60 * 1000));
        
        // Utwórz nowe zadanie na podstawie przekazanych danych
        const newTask = new Task({
        content,
        _id_autora: author._id,
        _id_zatrudnionego: null, // Początkowo puste
        koszt: cost,
        data: polishDate,
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
  const { email } = req.body;

  const author = await User.findOne({ email: email });

  if (!author) {
    return res.status(404).send("Author not found");
  }

  const tasks = await Task.find({
    _id_autora: { $ne: author._id },
    _id_zatrudnionego: null,
  }).sort({ createdAt: -1 });

  res.status(200).json(tasks);
};

const asignTask = async (req, res) => {
  const { email,taskID } = req.body;
  // Sprawdź, czy autor istnieje w bazie danych na podstawie adresu e-mail
  const author = await User.findOne({ email: email });
    // to compile
  if (!author) {
    return res.status(404);
  }

  const filter = { _id: taskID }; // Kryterium wyszukiwania po polu user._id
  const update = { _id_zatrudnionego: author._id }; // Aktualizowane dane

  const updatedTask = await Task.findOneAndUpdate(filter, update, {
    new: true // Ustawienie tej opcji sprawi, że metoda zwróci zaktualizowany dokument
  });

  const tasks = await Task.find({}).sort({ createdAt: -1 })

  res.status(200).json(updatedTask)
}




const getMyTasks = async (req, res) => {
  try {
    const { email, mode } = req.body;

    // Sprawdź, czy autor istnieje w bazie danych na podstawie adresu e-mail
    const author = await User.findOne({ email: email });

    if (!author) {
      return res.status(404).json({ message: "Autor nie został znaleziony." });
    }
    if(mode==="toBeCompleted"){
      const tasks = await Task.find({ _id_zatrudnionego: author._id }).sort({ createdAt: -1 });

      console.log(email)
      console.log(tasks)
      res.status(200).json(tasks);
    }else{
      // Znajdź zadania, które mają takie samo ID jak autor
      const tasks = await Task.find({ _id_autora: author._id }).sort({ createdAt: -1 });

      console.log(email)
      console.log(tasks)
      res.status(200).json(tasks);
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Wystąpił błąd serwera." });
  }
};


module.exports = {
    addTask,
    getTasks,
    asignTask,
    getMyTasks
}