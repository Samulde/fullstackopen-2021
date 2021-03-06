const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})
  
blogsRouter.post('/blogs', (request, response) => {
  const body = request.body
  
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes | 0
  })

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

module.exports = blogsRouter