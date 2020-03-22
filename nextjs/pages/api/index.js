const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
    const count = await db.query(escape`
    SELECT COUNT(*)
    AS profilesCount
    FROM quotes
    `)
cpnsole.log('count:::', count[0])
  const { profilesCount } = count[0]
//   const pageCount = Math.ceil(profilesCount / limit)
console.log('profilesCount', profilesCount)
  res.status(200).json({ profilesCount })
}