module.exports = (client, bot) => {
	client.on('ready', () => {
		client.user.setUsername(bot.name)
		// client.user.setAvatar(bot.avatar)

		console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
		client.user.setActivity(`S’occupe de ${client.guilds.size} canaux`)
	})
}
