import  { Schema, model} from "mongoose"

const userRegistationSchema = new Schema({

   firstName: {
    type: String,
    //required: true,
  },
  lastName: {
    type: String,
    //required: true,
  },
  email: {
    type: String,
    //required: true,
    //unique: true,
  },
  password: {
    type: String,
    //required: true,
  }
  

})    
//creazione modello mongoose
const UserRegistration = model('UserRegistration', userRegistationSchema)

export default UserRegistration