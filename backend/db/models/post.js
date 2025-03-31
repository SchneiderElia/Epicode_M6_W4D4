
import { Schema, model } from 'mongoose'

const commentSchema = new Schema({
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      //required: true, // Ensure every comment has an author
    },
    text: {
      type: String,
      //required: true, // Ensure every comment has text content
    },
    date: {
      type: Date,
      default: Date.now, // Default to the current date and time
    },
  });
  


const postSchema = new Schema ({

    category: {
        type: String,
    },
    title: {
        type: String,
    },
    cover: {
        type: String,
    },
    readTime: {
        value: Number,
        unit: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    content: {
        type: String,
    },

    comments: [commentSchema],

},{timestamps: true})

//creazione del modello
const Post = model ( "Post", postSchema)

export default Post;