const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: '127.0.0.1',
    database: 'quotesdb',
    user: 'root',
    password: 'root'
  }
})

exports.query = async query => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}