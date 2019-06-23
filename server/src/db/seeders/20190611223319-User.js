'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        username: 'matt',
        email: 'matt@duangchan.com',
        password: '$2a$10$.9bHEU8nS9w/n7GsaiTdReiT1nW8O/XwDRZbaQxyuW6OauJwQE1H.',
        roles: "['user', 'admin']",
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      },
      {
        id: 2,
        username: 'test',
        email: 'test@duangchan.com',
        password: '$2a$10$.9bHEU8nS9w/n7GsaiTdReiT1nW8O/XwDRZbaQxyuW6OauJwQE1H.',
        roles: "['user', 'admin']",
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
