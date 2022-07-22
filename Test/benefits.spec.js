const server = require('../server')
const supertest = require('supertest')
const request = supertest(server)

it('/benefits ~ 400', async () => {
    const response = await request.post('/benefits')
    expect(response.status).toBe(400)
    expect(response.body).toEqual({
        "success": false,
        "error": [
            "user: Invalid value",
            "password: Invalid value",
            "cpf: Invalid value"
        ]
    })
})

it('/benefits ~ 400', async () => {
    const response = await request
        .post('/benefits')
        .send({
            user: "arthur"
        })
    expect(response.status).toBe(400)
    expect(response.body).toEqual({
        "success": false,
        "error": [
            "password: Invalid value",
            "cpf: Invalid value"
        ]
    })
})


it('/benefits ~ 400', async () => {
    const response = await request
        .post('/benefits')
        .send({
            user: "arthur",
            password: "1234"
        })
    expect(response.status).toBe(400)
    expect(response.body).toEqual({
        "success": false,
        "error": [
            "cpf: Invalid value"
        ]
    })
})

it('/benefits ~ 400', async () => {
    const response = await request
        .post('/benefits')
        .send({
            user: "arthur",
            password: "1234",
            cpf: "12345678910"
        })
    expect(response.status).toBe(400)
    expect(response.body).toEqual({
        "success": false,
        "error": "Request failed with status code 401"
    })
})