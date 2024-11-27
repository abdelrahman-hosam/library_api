const express = require('express')
const app = express()
const controllers = require('./controllers')
app.get('/' , controllers.get_all_books)
app.get('/get_book' , controllers.get_book)
app.post('/add' , controllers.add_book)
app.post('/borrow' , controllers.borrow_book)
app.delete('/authors/remove', controllers.remove_authors)
app.put('/authors/update', controllers.update_authors)
app.patch('/authors/add', controllers.add_authors)
module.exports = {
    app
}