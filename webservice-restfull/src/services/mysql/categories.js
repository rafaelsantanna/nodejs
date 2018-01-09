
const categories = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('SELECT * FROM categories', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar as categorias', reject)
            return false
          }
          resolve({ categories: results })
        })
      })
    },
    save: (name) => {},
    update: (id, name) => {},
    del: (id) => {}
  }
}

module.exports = categories
