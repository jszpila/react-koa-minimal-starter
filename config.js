const env = process.env.NODE_ENV || 'development'
const config = {}

config.API_URL = process.env.HEROKU_URL ? `${process.env.HEROKU_URL}` : 'http://localhost:5000'

module.exports = config
