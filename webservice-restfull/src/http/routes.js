
const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Enjoy the silence?')
    next()
  })
}

module.exports = routes
