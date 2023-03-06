const express = require('express')
const router = express.Router()
let db = require('../firebase/config')

router.patch('/edit/:id', async(req, res) => {
    try{
        const instockRefs = db.collection('instock').doc(req.params.id); 
        let data = await instockRefs.update({...req.body})
        return res.json({meta: data})
    }catch(err){
        return res.json({error: err.message})
    }
})

module.exports = router;
