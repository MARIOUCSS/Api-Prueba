const multer=require('multer');

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
       cb(null,'./uploads') //todo cruda
  },
  filename:(req,file,cb)=>{
    // array que los corte donde empieza el punto
      const ext=file.originalname.split('.').pop() //imagen.png-->png
      cb(null,`${Date.now()}.${ext}`)
  }

})

const upload=multer({storage});

module.exports=upload;

