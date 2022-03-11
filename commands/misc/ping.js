const { MessageEmbed } = require('discord.js')
const { green, greenTick } = require(`../../util/config.json`)

//? A simple ping message prefix command.
module.exports = {
	name: 'ping',
	aliases: ['p', 'pong'],
	description: 'Prefix ping command example',
	cooldown: 5000,
	async execute(message) {
		const embed = new MessageEmbed().setColor(green).setDescription('Calculating ping...')
		message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } }).then((resultMessage) => {
			embed.setDescription(greenTick + ' Pong! ' + `\`${resultMessage.createdTimestamp - message.createdTimestamp}ms\``)
			resultMessage.edit({ embeds: [embed] })
		})
	},
}
