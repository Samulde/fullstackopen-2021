const http = require('http')
const app = require('./app')
const express = require('express')
const cors = require('cors')
const logger = require('./utils/logger')
const config = require('./utils/config')


app.use(cors())
app.use(express.json())



app.listen(config.PORT, () => {
  console.info(`Server running on port ${config.PORT}`)
})