const express = require('express')
const connection = require('../db')

// index page
exports.index = (req, res) => {
    connection.query(
        'SELECT id, title, description, created_by, created_on, status FROM articles',
        (error, results) => {
            res.render('index.ejs', {articles: results});
        }
    );
}


// edit article 
exports.edit = (req, res) => {
    connection.query(
            'SELECT id, title, description, created_by, created_on, status FROM articles WHERE id = ?',
            [req.params.id],
            (error, results) => {
                res.render('edit.ejs', {post: results[0]});
            }
        );
}

// Update method for edit page
exports.update = (req, res) => {
    connection.query(
            'UPDATE articles SET title = ?, description = ? WHERE id = ?',
            [req.body.title, req.body.description, req.params.id],
            (error, results) => {
                res.redirect('/');
            }
        );
}

// delete
exports.delete = (req, res) => {
    connection.query(
            'DELETE FROM articles WHERE id = ?',
            [req.params.id],
            (error, results) => {
                res.redirect('/');
            }
        );
}

// new article page
exports.new_get = (req, res) => {
    
    res.render('create.ejs', {});
    
}

// new article (post)
exports.new_post = (req, res) => {
    connection.query(
        'INSERT INTO articles(title, description) VALUES(?, ?)',
        [req.body.title, req.body.description],
        (error, results) => {
            res.redirect('/');
        }
    );
}