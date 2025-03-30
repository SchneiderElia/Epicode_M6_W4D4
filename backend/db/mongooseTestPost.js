import mongoose, {Schema, model} from "mongoose"
import "dotenv/config"

connectionString = process.env.MONGODB_CONNECTION_URL

await mongoose.connect(connectionString)
console.log('Hey im your database and im connected')

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
    cover: {
        type: String,
    },
    readTime: {
        value: Number,
        unit: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }

},{timestamps: True})

const Post = model('Post', postSchema)

const createPost = await Post.create({
   /*  category: "Graphic",
    title: "Base of Graphic Design",
    cover: "",
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    } */
})