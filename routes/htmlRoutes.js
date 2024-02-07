//function to create express 
const router = require('express').Router();
const path = require('path');

// GET Request to index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
// GET Request to note.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});
// run router

module.exports = router;
