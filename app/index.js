const config = require('./config')
const Discord = require('discord.js')
const client = new Discord.Client()

// On load
client.on('ready', () => {
	client.user.setUsername(config.bot.name)
	client.user.setAvatar(config.bot.avatar)

	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
	client.user.setActivity(`S’occupe de ${client.guilds.size} canaux`)
})

// Events
require('./events/messages')

// Log bot
client.login(config.bot.token).catch(console.error)
