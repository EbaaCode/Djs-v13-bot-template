const { MessageEmbed } = require('discord.js')
const { ContextMenuCommandBuilder } = require('@discordjs/builders');
const { lightBlue } = require(`../../../util/config.json`)

//? Message Context Menu Example Command.
module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName('Fetch user ID')
		.setType(2),
	async execute(interaction, client) {
		let user = await client.users.fetch(interaction.targetId)
		const embed = new MessageEmbed()
			.setColor(lightBlue)
			.setDescription(`${user.username}'s user ID: \`${user.id}\``)
		interaction.user.send({ embeds: [embed], ephemeral: true })
		interaction.reply({ content: 'User ID sent.', ephemeral: true })
	},
}
