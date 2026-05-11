const express = require('express')
const router = express.Router()

let books = [
  {
    id: 1,
    author: 'John Doe',
    title: 'JavaScript Book',
  },
  {
    id: 2,
    author: 'Doe John',
    title: 'TypeScript Book',
  },
]

router.get('/', (req, res) => {
  res.json(books)
})

router.get('/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10)
  const book = books.find((book) => book.id === bookId)

  if (book) {
    res.json(book)
  }

  return res.status(404).json({
    status: `Book with ${bookId} not found`,
  })
})

module.exports = router
