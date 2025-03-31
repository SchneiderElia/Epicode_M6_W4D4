import multer from 'multer'
import path from 'path'
import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'



const avatarProfileStorage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params:{
        folder : "stiveBlog/avatartProfile",
        cloud_name: process.env.CLOUD_NAME,
        //cloude_name : process.env.CLOUD_NAME,
        api_key : process.env.CLOUDINARY_KEY,
        api_secret :  process.env.CLOUDINARY_API_SECRET,
        fileName : (req, file) => {
            req.body.postCover = path.basename(file.originalname, path.extname(file.originalname))
        }}
    })

    const uploadAvatar = multer({ storage : avatarProfileStorage })

export default uploadAvatar