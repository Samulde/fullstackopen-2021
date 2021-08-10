const userRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

userRouter.post('/', async (request, response, next) => {
    const body = request.body
  
    if (body.password.length < 4) {
        return response.status(400).json({"error": 'User validation failed: password is shorter than the minimum allowed length (3)'})
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
  
    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    })
  
    try {
        const savedUser = await user.save()
    
        response.json(savedUser)
    } catch (err) {
        next(err)
    }
})

userRouter.get('/', async (request, response) => {
    
    const users = await User
        .find({})
        .populate('blogs')
    response.json(users)

})

module.exports = userRouter