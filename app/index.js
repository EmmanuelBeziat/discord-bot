const config = require('./config')
const Discord = require('discord.js')
const client = new Discord.Client()

// On load
require('./init/ready')(client, config.bot)

// Events
require('./events/messages')(client, config.bot)
require('./events/user')(client, config.bot)

// Log bot
client.login(config.bot.token).catch(console.error)
