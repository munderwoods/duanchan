const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')
const sessionSecret = require('../config/sessionSecret.js')

const PORT = process.env.PORT || 8081
const db = require('./db/models')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(session({ secret: sessionSecret.secret, resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

require('./routes/api.js')(app)

db
  .sequelize
  .query('SET FOREIGN_KEY_CHECKS = 0', null, { raw: true })
  .then(res => {
    db.sequelize.sync({ force: true }).then(() => {
      app.listen(PORT, () => {
        console.log('\n ==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT)
      })
    })
  })
