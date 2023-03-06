const express = require('express')
const router = express.Router()
let inputValidate = require('../models/inputValidate.js')
let db = require('../firebase/config')
let deleteImage = require('../cloudinary')

router.post('/items/add/', async(req, res) => {
    try{
        //validation input error
        let {public_id} = req.body.image_infos;
        let {error} = inputValidate(req.body);
        if(error){
            await deleteImage(res, public_id);
            return res.json({error: error.details[0].message});
        }

        const instockRefs = db.collection('instock');
        const item = await instockRefs.where('name', '==', req.body.name).get();
        if(!item.empty){
            await deleteImage(res, public_id);
            return res.json({error: 'This name has been registered'});
        }
        
        const data = await instockRefs.add(req.body);
        return res.status(201).json({
            meta: {
                id: data.id
            }
        })
    }catch(err){
        return res.json({
            error: err.message
        })
    }
})

router.post('/monthly/add/', async(req, res) => {
    try{
        let monthlyRefs = db.collection('monthly selling');
        let data = await monthlyRefs.add(req.body);
        return res.status(201).json({
            meta: {
                id: data.id
            }
        })
    }catch(err){
        return res.json({error: err.message})
    }
})
module.exports = router;