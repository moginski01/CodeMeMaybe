const mongoose = require('mongoose')

const Schema = mongoose.Schema

// const workoutSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     reps: {
//         type: Number,
//         required: true
//     },
//     load:{
//         type: Number,
//         required: true
//     },
//     user_id:{
//         type: String,
//         required: true
//     }
// }, {timestamps: true})


const taskSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    _id_autora: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    _id_zatrudnionego: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    koszt: {
      type: Number,
      required: true
    },
    data: {
      type: Date,
      required: true
    },
    languages: {
      type: [String],
      default: []
    },
    chat: {
      type: [{
        text: {
          type: String,
          required: true
        },
        author: {
          name: {
            type: String,
            required: true
          },
          email: {
            type: String,
            required: true
          }
        }
      }],
      default: []
    }
  });

module.exports = mongoose.model('Task', taskSchema)