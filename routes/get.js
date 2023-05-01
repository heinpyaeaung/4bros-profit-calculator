const express = require('express')
const router = express.Router()
let db = require('../firebase/config')

router.get('/all_items/', async(req, res) => {
        let query_data = [];
        let limit = Number(req.query.limit);
        let instockRefs = db.collection('instock').limit(limit).orderBy('name');  
        let Instocknapshot = await instockRefs.get();
        if(Instocknapshot.empty) return res.json({error: 'No Items'});
        Instocknapshot.docs.forEach(p => query_data.push({id: p.id, data: p.data()}))
        return res.json({
            data: query_data,
        })
})

router.get('/monthly_lists/', async(req, res) => {
    let all_data = [];
    const monthlyRefs = db.collection('monthly selling');
    const monthlySnapshot = await monthlyRefs.get();
    if(monthlySnapshot.empty) return res.json({error: 'No Lists'});
    monthlySnapshot.forEach(doc => {
        all_data.push({id: doc.id, data: doc.data()})
    })
    return res.json({data: all_data})
})

router.get('/search_items/', async(req, res) => { 
        let query_item = [];
        let instockRefs = db.collection('instock');
        let snapShot = await instockRefs.where('name', '==', req.query.queryName).get();     
        if(snapShot.empty){
            return res.json({error: 'no matching document'});
        }
        snapShot.forEach(doc => query_item.push({id: doc.id, data: doc.data()}));
        return res.json({data: query_item});
})

module.exports = router;