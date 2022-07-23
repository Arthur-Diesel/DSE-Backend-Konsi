const server = require('../server')
const supertest = require('supertest')
const request = supertest(server)

it('/benefits ~ 400', async () => {
    const response = await request.post('/benefits')
    expect(response.status).toBe(400)
    expect(response.body).toEqual({
        "success": false,
        "error": [
            "user: user precisa ser informado!",
            "password: password precisa ser informado!",
            "cpf: cpf precisa ser informado!",
            "cpf: cpf precisa ter mais de 11 dígitos!" 
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
            "password: password precisa ser informado!",
            "cpf: cpf precisa ser informado!",
            "cpf: cpf precisa ter mais de 11 dígitos!" 
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
            "cpf: cpf precisa ser informado!",
            "cpf: cpf precisa ter mais de 11 dígitos!" 
        ]
    })
})

it('/benefits ~ 400', async () => {
    const response = await request
        .post('/benefits')
        .send({
            user: "arthur",
            password: "1234",
            cpf: "123456789"
        })
    expect(response.status).toBe(400)
    expect(response.body).toEqual({
        "success": false,
        "error": [
            "cpf: cpf precisa ter mais de 11 dígitos!" 
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