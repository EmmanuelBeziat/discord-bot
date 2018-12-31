const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
	client.user.setUsername(config.bot.name)
	client.user.setAvatar(config.bot.avatar)

	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
	client.user.setActivity(`Serving ${client.guilds.size} servers`)
})
