const Command = require('../class/command')

module.exports = class Test extends Command {
	static match (message) {
		return message.content.startsWith('!ping')
	}

	static action (message) {
		message.reply('Pong !')
	}
}
