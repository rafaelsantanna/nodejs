
const restify = require('restify')
const server = restify.createServer()
const routes = require('../http/routes')
const cors = require('./cors')

server.pre(cors.preflight)
server.use(cors.actual)
server.use(restify.plugins.bodyParser())
server.use((req, res, next) => {
  if (!req.headers['x-access-token']) {
    res.send(403, { error: 'Token não fornecido' })
    return false
  }
  next()
})

routes(server)

module.exports = server
