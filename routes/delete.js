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
  const collectionPath = 'monthly selling';
  const batchSize = 3;
  deleteCollection(collectionPath, batchSize)
    .then(() => {
      return res.json({message: `Collection ${collectionPath} deleted successfully.`});
    })
    .catch((err) => {
      return res.json({error: `Error deleting collection ${collectionPath}: ${err}`});
    });
})
  
// Function to delete a collection
async function deleteCollection(collectionPath, batchSize) {
  const collectionRef = db.collection(collectionPath);
  const query = collectionRef.limit(batchSize);
  return new Promise((resolve, reject) => {
    deleteQueryBatch(query, batchSize, resolve, reject);
  });
}

// Helper function to recursively delete documents in batches
function deleteQueryBatch(query, batchSize, resolve, reject) {
  query.get()
    .then((snapshot) => {
      // When there are no documents left, we are done
      if (snapshot.size === 0) {
        resolve()
        return;
      }

      // Delete documents in batch
      const batch = db.batch();
      snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
      });

      return batch.commit().then(() => {
        return snapshot.size;
      });
    })
    .then((numDeleted) => {
      if (numDeleted === 0) {
        resolve();
        return;
      }
      // Recurse on the next batch
      process.nextTick(() => {
        deleteQueryBatch(query, batchSize, resolve, reject);
      });
    })
    .catch(reject);
}

module.exports = router;