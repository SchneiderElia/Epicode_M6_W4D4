import mongoose, { Schema, model }from 'mongoose'
import 'dotenv/config'




const connectionString = process.env.MONGODB_CONNECTION_URL

await mongoose.connect(connectionString)
console.log('Hey im your database and im connected')

const userSchema = new Schema({

    title: {
        type: String,
    },
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

/* const createdUser = await User.create({
    firstName: 'Elia',
    lastName: 'Schneider',
    email: "elysshc@gmail.com",
    dateOfBirth: 1995-11-14
},
console.log('Hello baby u new User created successfully', createdUser),
)  */


/* const theUser = await User.findById("67d79b275a2dc04d094161e0")
//console.log(theUser)


const allUsers = await User.where({})
console.log('hello welcome new user' , allUsers)

const updatedUser = await User.findByIdAndUpdate("67d79b275a2dc04d094161e0",
    {
        title: 'Owner'
    },{new: true},
    console.log('nice your user updated' , updatedUser)
)
console.log(updatedUser)

const deletedUser = await User.findByIdAndDelete("67d79b275a2dc04d094161e0")
console.log('byby user deleted')
 */


mongoose.connection.close()


