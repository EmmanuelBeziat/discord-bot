const config = require('yaml-reader').read('./config.yml')

module.exports.app = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || config.app.port,
	baseUrl: process.env.BASE_URL || config.app.url,
}

module.exports.bot = {
	name: process.env.BOT_NAME || config.bot.name,
	avatar: process.env.BOT_AVATAR || config.bot.avatar,
	token: process.env.BOT_TOKEN || config.bot.token,
	prefix: process.env.BOT_PREFIX || config.bot.prefix
}
