import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

  cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
        api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET , 
    });

     // Upload an image
    const UploadOnCloudinary = async (localFilePath) => {
      try {
        if (!localFilePath) return null;

        //upload file on cloudinary
      const response = await cloudinary.uploader.upload(localFilePath , {
          resource_type : "auto"
        })

        //file uploaded successfully

        console.log("FILE UPLOADED ON CLOUDINARY ", response.url);

        return response;

      }
      catch(error){
        fs.unlinkSync(localFilePath) // removes the locally saved temperory file as the upload operation got failed
        return null;
      }
    }

export default UploadOnCloudinary;




// so what happens is that fisrt the files which has to be uploaded must be there in local server via multer then after which we use cloudify  in order to store the files in 3rd party website 