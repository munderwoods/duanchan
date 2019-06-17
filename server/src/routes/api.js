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
    let user = await getUserFromRequest(req)
    if (user) {
      user.password = null
      user.confirmationToken = null
      res.json(buildResponse(true, 'Got User successfully.', user))
    } else {
      res.json(buildResponse(false, 'Failed to find User.'))
    }
  })

  app.get('/movies', async (req, res) => {
    await db.Movie.findAll({ order: [['year', 'ASC']], include: [db.Review] }).then(result => {
      res.json(buildResponse(true, 'Got Movies successfully.', result))
    })
  })

  app.post('/reviews', checkToken.checkToken, async (req, res) => {
    db.Review.create(req.body).then(result => {
      res.json(buildResponse(true, 'Submitted Review successfully.', result))
    }).catch(err => {
      res.json(buildResponse(false, 'Failed to submit Review.', err))
    })
  })

  app.delete('/reviews', checkToken.checkToken, async (req, res) => {
    await db.Review.destroy({ where: { id: parseInt(req.query.id) }}).then(result => {
      res.json(buildResponse(true, 'Deleted Review successfully.', result))
    }).catch(err => res.json(buildResponse(false, 'Could not find Review', err)))
  })

  app.put('/reviews', checkToken.checkToken, async (req, res) => {
    await db.Review.update(req.body, { where: {id: req.body.id }}).then(result => {
      res.json(buildResponse(true, 'Updated Review successfully.', result))
    }).catch(err => res.json(buildResponse(false, 'Could not find Review', err)))
  })
}
