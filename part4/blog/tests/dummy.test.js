const listHelper = require('../utils/list_helper')

test('Expect the return of dummy to be 1', () => {
    const blogs = []

    const response = listHelper.returnOne(blogs)
    expect(response).toBe(1)
})

describe('total likes', () => {
    test('of empty list is zero', () => {
        const response = listHelper.totalLikes([])

        expect(response).toBe(0)
    })

    test('when list has only one blog equals the likes of that', () => {
        const response = listHelper.totalLikes([listHelper.blogs[0]])

        expect(response).toBe(7)
    })

    test('of a bigger list is calculated right', () => {
        const response = listHelper.totalLikes(listHelper.blogs)

        expect(response).toBe(36)
    })
})