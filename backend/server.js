import 'dotenv/config' //to autocomplete final import to.js
import express from 'express'
import cors from 'cors' //comunication to front
import router from './router/router.js'




const server = express() //server build it
server.use(cors())
server.use(express.json())
//monto il router con prefisso cosi tutte avranno /api
server.use('/api/v1', router)


server.listen(process.env.PORT, () => {
    console.clear()
    console.log('Hello - Server its running!')
})
