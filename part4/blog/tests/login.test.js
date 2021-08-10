const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

describe('Bad username/password are rejected', () => {
    test('Bad password', async () => {
        const newUser = {
            "notes": [],
            "username": "testUser",
            "name": "test",
            "password": "1"
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(400)

    })

    test('Bad username', async () => {
        const newUser = {
            "notes": [],
            "username": "testUser",
            "name": "test",
            "password": "1"
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
    })
})


afterAll( () => {
    mongoose.connection.close()
})