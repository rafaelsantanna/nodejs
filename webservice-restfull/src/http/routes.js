
const routes = (server) => {
  server.get('categoria', (req, res, next) => {
    res.send(['1', 'lalala'])
    next()
  })
  server.post('categoria', (req, res, next) => {
    const { name } = req.params
    res.send(name)
    next()
  })
  //   server.put('categoria', (req, res, next) => {
  //     res.send()
  //     next()
  //   })
  //   server.delete('categoria', (req, res, next) => {
  //     res.send()
  //     next()
  //   })
  server.get('/', (req, res, next) => {
    res.send('Enjoy the silence?')
    next()
  })
}

module.exports = routes
