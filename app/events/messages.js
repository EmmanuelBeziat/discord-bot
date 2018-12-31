const Ping = require('../commands/ping')

module.exports = (client, bot) => {
	client.on('message', message => {
		// Ignore other bots
		if (message.author.bot) return
		if (message.content.indexOf(bot.prefix) !== 0) return

		Ping.parse(client, message)
	})
}
