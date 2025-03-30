import multer from "multer";
import path from "node:path";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "sriveBlog",
    cloud_name: process.env.CLOUD_NAME,
    //api_key: process.env.CLOUD_API_KEY, //not necessary
    //api_secret: process.env.CLOUD_API_SECRET, //not necessary
   // filename: (request, file, callback) => {
     // console.log(file); // To see what the file object contains
      //callback(null, Date.now() + path.extname(file.originalname));
    //},
  },
});

const cloudinariStorage = multer({ storage: cloudinaryStorage });

export default cloudinariStorage;
//export default uploadAvatar;