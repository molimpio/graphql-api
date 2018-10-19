const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

// knex('users').insert({
//     name: 'João',
//     email: 'joao@gmail.com',
//     password: 'joao'
// }).then(data => console.log(data))

// knex('users').then(res => console.log(res))