const express = require('express')
const router = express.Router()

let books = [
  {
    id: 1,
    author: 'John Doe',
    title: 'JavaScript Book',
  },
]

router.get('/', (req, res) => {
  res.json(books)
})

module.exports = router
