// import express from 'express' // MJS
const express = require('express')
const app = express()

const authorRouter = require('./routes/authorRouter')

app.use('/authors', authorRouter)

// Every thrown error in the application or the previous middleware function
//  calling `next` with an error as an argument will eventually go to this
//  middleware function
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.statusCode || 500).send(err.message)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})
