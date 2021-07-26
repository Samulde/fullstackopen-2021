const config = require('./utils/config')

const express = require('express')
const app = express()
const cors = require('cors')

const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info(`Connecting to mongoDB`)
mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connececting to MongoDB: ', error.message)
    })

app.use(cors())
app.use(express.json())
app.use('/api', blogsRouter)

module.exports = app
