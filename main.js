'use strict'

const {db} = require('./server/db')
const app = require('./server')
const PORT = process.env.PORT || 5409

db.sync()
  .then(() => {
    console.log('db synced')
    app.listen(process.env.PORT || 5409, () => console.log(`studiously serving silly sounds on port ${PORT}`))
})
