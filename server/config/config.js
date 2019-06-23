const secrets = require('./secrets')

module.exports = {
  'development': {
    'username': 'onlywire',
    'password': 'onlywire',
    'database': 'duangchan',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  },
  'test': {
    'username': 'root',
    'password': null,
    'database': 'database_test',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  },
  'production': {
    'username': secrets.username,
    'password': secrets.password,
    'database': secrets.database,
    'host': secrets.host,
    'dialect': 'mysql'
  }
}
