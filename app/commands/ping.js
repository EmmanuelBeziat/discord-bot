const Command = require('../class/command')

module.exports = class Test extends Command {
	static match (command) {
		return command === 'ping'
	}

	static async action (message) {
		const m = await message.channel.send('Ping?')
		return m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`)
	}
}
