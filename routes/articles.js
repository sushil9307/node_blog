const express = require('express')
const router = express.Router();

const article = require('../models/article')

// List
router.get('/', article.index);

// Edit page
router.get('/edit/:id', article.edit);
router.post('/update/:id', article.update);

// Delete
router.get('/delete/:id' , article.delete);

// Create
router.get('/new', article.new_get);

router.post('/new', article.new_post);

module.exports = router
