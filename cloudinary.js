const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_CLOUD_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
})

async function deleteCloudinaryImg(res,img_url){
    try{
        let responsetOfCl = await cloudinary.uploader.destroy(img_url);
        if(!responsetOfCl.result === 'ok'){
            return res.json({error: 'something wrong'});
        }  
    }catch(err){
        return res.json({error: err.message})
    }
}

module.exports = deleteCloudinaryImg;