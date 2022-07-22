const express = require('express')
const routes = require('./Src/Routes/Index')
const server = express()
server.use(express.json())

server.get('/', (req, res) => {
    return res.status(200).json({message: 'Hello!', success: true})
})

server.use('/', routes)

module.exports = server