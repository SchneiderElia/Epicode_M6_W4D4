import 'dotenv/config' //to autocomplete final import to.js
import express from 'express'
import cors from 'cors' //comunication to front
import router from './router/router.js'
import mongoose from 'mongoose'






const server = express() //server build it
server.use(cors())
server.use(express.json())
//monto il router con prefisso cosi tutte avranno /api
server.use('/api/v1', router)


const connectionString = process.env.MONGODB_CONNECTION_URL

await mongoose.connect(connectionString)
console.log('Hey im your database and im connected')

mongoose.connection.close()

server.listen(process.env.PORT, () => {
    console.clear()
    console.log('Hello - Server its running!')
})
