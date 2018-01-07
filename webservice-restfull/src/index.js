
const restify = require('restify')
const server = restify.createServer()

server.get('/', (req, res, next) => {
  res.send('Enjoy the silence?')
  next()
})

server.listen('3456')
