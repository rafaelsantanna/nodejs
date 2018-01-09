
const categories = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection } = deps
        connection.query('SELECT * FROM categories', (error, results) => {
          if (error) {
            reject(error)
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
