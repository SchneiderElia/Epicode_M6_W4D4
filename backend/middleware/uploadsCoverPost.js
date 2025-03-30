import multer from 'multer'
import path from 'path'
import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'



const postCoverStorage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params:{
        folder : "stiveBlog/postCovers",
        cloude_name : process.env.CLOUD_NAME,
        api_key : process.env.CLOUDINARY_API_KEY,
        api_secret :  process.env.CLOUDINARY_API_SECRET,
        fileName : (req, file) => {
            req.body.postCover = path.basename(file.originalname, path.extname(file.originalname))
        }}
    })

    const postCoverUpload = multer({ storage : postCoverStorage })

export default postCoverUpload