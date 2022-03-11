const { cooldown, permissions } = require('../util/functions')
const { prefix } = require(`../util/config.json`)

module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(message, client) {
		let commandPrefix = prefix
		const mentionRegex = message.content.match(new RegExp(`^<@!?(${client.user.id})>`, 'gi'))
		if (mentionRegex) commandPrefix = `${mentionRegex[0]} `
		if (!message.content.startsWith(commandPrefix) || message.author.bot) return
		const args = message.content.slice(commandPrefix.length).split(/ +/)
		const commandName = args.shift().toLowerCase()
		const command = client.commands.get(commandName) || client.commands.find((command) => command.aliases && command.aliases.includes(commandName))
		if (!command) return
		//? Command Permissions.
		if (command.permissions && command.permissions.length) {
			if (permissions(message, command)) {
				return
			}
		}
		//? Command Cooldown.
		if (command.cooldown) {
			if (cooldown(message, command, message.author.id, client)) {
				return
			}
		}
		try {
			await command.execute(message, client, args, commandPrefix)
		} catch (error) {
			console.error(error)
			await message.reply({
				content: '`An error has occurred while executing this command.`',
				ephemeral: true,
				allowedMentions: { repliedUser: false },
			})
		}
	},
}
