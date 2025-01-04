// import express from 'express' // MJS
const express = require('express')
const app = express()

const authorRouter = require('./routes/authorRouter')

app.use('/authors', authorRouter)
// app.use('/')

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})
