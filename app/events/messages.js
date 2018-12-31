const Discord = require('discord.js')
const client = new Discord.Client()

const Ping = require('../commands/ping')

client.on('message', message => {
	// Ignore other bots
	if (message.author.bot) return

	if (message.content.indexOf(config.bot.prefix) !== 0) return

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
	const command = args.shift().toLowerCase()

	Ping.parse(command)
})
