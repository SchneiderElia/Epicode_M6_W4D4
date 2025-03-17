import mongoose, { Schema, model }from 'mongoose'
import 'dotenv/config'



const connectionString = process.env.MONGODB_CONNECTION_URL

await mongoose.connect(connectionString)
console.log('Hey im your database and im connected')

const userSchema = new Schema({

   firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfBirth:{
    type: Date,
  },
  avatar:{
    type: String,
  },

})    
//creazione modello mongoose
const User = model('User', userSchema)

const createdUser = await User.create({
    firstName: 'Elia',
    lastName: 'Schneider',
    email: "elysshc@gmail.com",
    dateOfBirth: 1995-11-14
})
console.log('User created successfully')
console.log(createdUser)

mongoose.connection.close()


