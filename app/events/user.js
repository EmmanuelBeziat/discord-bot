module.exports = (client, bot) => {
	client.on('presenceUpdate', (oldMember, newMember) => {
		console.log(oldMember.presence.game, newMember.presence.game)
	})
}
