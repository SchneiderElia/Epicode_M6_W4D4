import { Schema, model } from 'mongoose'

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
    }


},{timestamps: true})

//creazione del modello
const Post = model ( "Post", postSchema)

export default Post;