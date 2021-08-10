const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/blogs', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})
  
blogRouter.post('/blogs', async (request, response, next) => {
  const body = request.body
  
  if (!body.title) {
    return response.status(400).json({error: "title missing from payload"})
  }

  if (!body.url) {
    return response.status(400).json({error: "url missing from payload"})
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0
  })

  try {
    const savedBlog = await blog.save()
    response.status(201).json(savedBlog)
  } catch (err) {
    next(err)
  }
  

  
})

module.exports = blogRouter