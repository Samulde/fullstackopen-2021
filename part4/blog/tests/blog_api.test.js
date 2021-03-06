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

test('blogs have an id property', async () => {
    const blogs = await helper.blogsInDb()

    expect(blogs[0].id).toBeDefined()
})

test('blogs with likes property missing default to 0', async () => {
    const newBlog = {
        "title": "A blog with no likes property",
        "author": "Blog Admin",
        "url": "www.0-likes.com"
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()

    expect(blogsAtEnd[blogsAtEnd.length - 1].likes).toBe(0)

})

test ('blogs with title property missing return 400', async () => {
    const newBlog = {
        "author": "Blog Admin",
        "url": "www.no-title.com",
        "likes": 0
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
        
})

test ('blogs with url property missing return 400', async () => {
    const newBlog = {
        "title": "Missing URL",
        "author": "Blog Admin",
        "likes": 0
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
        
})

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

test('a blog can be deleted by its id', async () => {
    
    const firstId = initialBlogs[0]._id

    await api
        .delete(`/api/blogs/${firstId}`)
        .expect(204)
    
    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(initialBlogs.length - 1)
})

test('likes can be updated', async () => {

    const firstId = initialBlogs[0]._id
    const updatedData = { likes: 69 }

    const response = await api
        .put(`/api/blogs/${firstId}`)
        .send(updatedData)
        .expect(200)
    
    expect(response.body.likes).toBe(updatedData.likes)
})


afterAll( () => {
    mongoose.connection.close()
})