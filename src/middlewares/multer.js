import multer from "multer";


const storage = multer.diskStorage({ // store in disk .. .diskstorage
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },

  filename: function (req, file, cb) {
    
    cb(null, file.originalname)
  } 
})

export const upload = multer({storage});



