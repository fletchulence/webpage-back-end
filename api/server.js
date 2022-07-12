const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')

const authRouter = require('./auth/auth-router')
const usersRouter = require('./components/users/users-router')
// const projectsRouter = require('./projects/projects-router')
// const fed_historyRouter = require('./components/fed_history/fed_history-router')
// const fishtanksRouter = require('./components/fishtanks/fishtanks-router')


const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter )
// server.use('/api/projects', projectsRouter )
// server.use('/api/fishtanks', fishtanksRouter)
// server.use('/api/fed_history', fed_historyRouter)

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
     message: err.message,
     stack: err.stack,
  });
});

module.exports = server
