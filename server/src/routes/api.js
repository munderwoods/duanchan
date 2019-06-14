const db = require('../db/models')
const passport = require('../../config/passport')
const checkToken = require('../middleware/checkToken')
const jwtSecret = require('../../config/jwtSecret')
let jwt = require('jsonwebtoken')

function buildResponse (success, message, data = null) {
  return {
    success: success,
    message: message,
    data: data
  }
}

async function getUserFromRequest (req) {
  let token = req.headers['authorization']
  token = token.slice(7, token.length)
  const username = jwt.verify(token, jwtSecret.secret).username
  let user = null
  await db.User.findOne({ where: { username: username } }).then(result => {
    user = result
  })
  return user
}

module.exports = (app) => {
  app.post('/login', passport.authenticate('local'), (req, res) => {
    let token = jwt.sign({ username: req.user.username, roles: ['user'] },
      jwtSecret.secret,
      { expiresIn: '24h' }
    )
    res.json(buildResponse(true, 'Logged in successfully,', token))
  })

  app.post('/register', (req, res) => {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      level: 0,
      roles: "['user']",
      status: 0
    }).then(() => {
      res.redirect(307, '/login')
    }).catch((err) => {
      console.log(err)
      res.json(buildResponse(false, 'Failed to register.', err))
    })
  })

  app.get('/user', checkToken.checkToken, async (req, res) => {
    const user = await getUserFromRequest(req)
    if (user) {
      const userData = {
        username: user.username,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        level: user.level,
        authyId: user.authyId,
        stripeId: user.stripeId,
        company: user.company,
        roles: user.roles,
        status: user.status
      }
      res.json(buildResponse(true, 'Got User successfully.', userData))
    } else {
      res.json(buildResponse(false, 'Failed to find User.'))
    }
  })

  app.get('/movies', async (req, res) => {
    await db.Movie.findAll().then(result => {
      res.json(buildResponse(true, 'Got Movies successfully.', result))
    })
  })
}
