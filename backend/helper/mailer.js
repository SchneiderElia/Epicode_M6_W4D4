import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()


const mailer = nodemailer.createTransport({
    host: process.env.SEN_GRID_SERVER,
    port: process.env.SEN_GRID_PORT,
    auth: {
        user: process.env.SEN_GRID_USER,
        pass: process.env.SEN_GRID_KEY
    }
})

export default mailer

