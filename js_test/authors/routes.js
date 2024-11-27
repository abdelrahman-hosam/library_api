const express = require('express')
const app = express()
const controllers = require('./controllers')
app.get('/' , controllers.get_all_authors)
app.get('/get_author' , controllers.get_author)
app.get('/books_wrote' , controllers.books_wrote)
app.post('/add_author' , controllers.add_author)
app.patch('/update_username' , controllers.update_author_username)
module.exports = {
    app
}