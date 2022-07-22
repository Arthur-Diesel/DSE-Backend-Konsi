const server = require('../server')
const supertest = require('supertest')
const request = supertest(server)

it('/ ~ 200', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
    expect(response.body).toEqual({message: 'Hello!', success: true})
})