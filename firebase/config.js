const admin = require('firebase-admin')
admin.initializeApp({
    credentials: admin.credential.applicationDefault()
})
const db = admin.firestore();
module.exports = db;