const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: 'remotemysql.com',
    database: 'p9pmJmMPsj',
    user: 'p9pmJmMPsj',
    password: 'DJEKnH7O1C'
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