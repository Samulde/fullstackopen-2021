const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogRouter = require('./controllers/blogs')
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
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
app.use(middleware.tokenExtractor)
app.use('/api/login', loginRouter)
app.use('/api/blogs', middleware.userExtractor, blogRouter)
app.use('/api/users', userRouter)

app.use(middleware.errorHandler)
module.exports = app
