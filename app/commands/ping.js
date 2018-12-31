const Command = require('../class/command')

module.exports = class Test extends Command {
	static match (command) {
		return command === 'ping'
	}

	static async action (client, message) {
		const m = await message.channel.send('Ping ?')
		return m.edit(`Pong ! \nLatence : ${m.createdTimestamp - message.createdTimestamp}ms. \nLatence de l’API : ${Math.round(client.ping)}ms`)
	}
}
