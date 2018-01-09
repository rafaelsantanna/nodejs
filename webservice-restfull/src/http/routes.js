
const db = require('../services/mysql')

const routes = (server) => {
  server.get('categoria', (req, res, next) => {
    db.categories().all().then(categories => {
      res.send(categories)
      next()
    }).catch(error => {
      res.send(error)
      next()
    })
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
