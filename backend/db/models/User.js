import { Schema, model} from "mmongoose"

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

export default User;