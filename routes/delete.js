const express = require('express')
const router = express.Router()
let db = require('../firebase/config')
let deleteImage = require('../cloudinary')

router.delete('/delete/item/', async(req, res) => {
    try{
        let {id, img_url} = req.query;
        const instockRefs = db.collection('instock').doc(id); 
        await instockRefs.delete();
        await deleteImage(res, img_url)
        return res.json({
            meta: {id},
            data: 'sucessfully deleted'
        });
    }catch(err){
        return res.json({error: err.message});
    }
})

router.delete('/monthly_lists/', (req, res) => {
  const collectionRef = db.collection('monthly selling');
  const batch = db.batch();
  collectionRef.get()
    .then(querySnapShot => {
      querySnapShot.forEach(doc => {
        batch.delete(doc.ref);
      })
      return batch.commit();
    })
    .then(_ => res.json({message: 'All documents deleted successfully'}))
    .catch(err => res.json({error: err.message}))
})
  
module.exports = router;