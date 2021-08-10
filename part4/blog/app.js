const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

const mongoUrl = config.MONGODB_URI

logger.info(`Connecting to mongoDB`)
mongoose.connect(mongoUrl, 
  { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false, 
  useCreateIndex: true 
  })
  .then( () => {
    logger.info('Connected to MongoDB')
  })
  .catch( (error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)

module.exports = app
