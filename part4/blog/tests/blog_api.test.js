const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const initialBlogs = require('./test_helper').initialBlogs
const helper = require('./test_helper')
const logger = require('../utils/logger')

beforeEach(async () => {
    await Blog.deleteMany({})
    logger.info('Database cleared')

    const blogObjects = initialBlogs
        .map(blog => new Blog(blog))
    const promiseArray = blogObjects.map(blog => blog.save())
    await Promise.all(promiseArray)

    logger.info('Database initialised')
})

test('all blogs are returned', async () => {
    const response = await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    
    expect(response.body).toHaveLength(initialBlogs.length)
})

test('blogs are returned as json', async () => {
    const response = await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    
}, 100000)

test('a valid blog can be added', async () => {
    
    const newBlog = {
        "title": "Chris",
        "author": "Chris Samulde",
        "url": "www.cba.com",
        "likes": 13
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()

    const titles = blogsAtEnd.map(b => b.title)

    expect(blogsAtEnd).toHaveLength(initialBlogs.length + 1)
    expect(titles).toContain('Chris')
    

})



afterAll( () => {
    mongoose.connection.close()
})