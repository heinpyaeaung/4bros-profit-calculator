const express = require('express')
const router = express.Router()
let db = require('../firebase/config')
let deleteImage = require('../cloudinary')

router.delete('/delete/item/', async(req, res) => {
      let {id, img_url} = req.query;
      const instockRefs = db.collection('instock').doc(id); 
      await instockRefs.delete();
      await deleteImage(res, img_url)
      return res.json({
          meta: {id},
          data: 'sucessfully deleted'
      });
})

router.delete('/monthly_lists/', async(req, res) => {
  const collectionRef = db.collection('monthly selling');
  const batch = db.batch();
  const querySnapShot = await collectionRef.get();
  querySnapShot.forEach(doc => {
    batch.delete(doc.ref)
  })
  batch.commit();
  return res.json({message: 'All documents deleted successfully'});
})
  
module.exports = router;