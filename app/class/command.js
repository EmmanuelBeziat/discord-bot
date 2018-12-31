const config = require('../config')

module.exports = class Command {
	static parse (client, message) {
		const args = message.content.slice(config.bot.prefix.length).trim().split(/ +/g)
		const command = args.shift().toLowerCase()

		if (this.match(command)) {
			this.action(client, message)
			return true
		}
		return false
	}

	static match (message) {
		return false
	}

	static action (message) {
		return false
	}
}
