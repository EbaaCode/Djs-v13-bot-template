const { MessageButton, MessageActionRow } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { lightBlue } = require(`../../../util/config.json`)
const { customEmbed } = require(`../../../util/embed`)

//? Using Buttons Example.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('button-example')
		.setDescription('An example command to show how to create buttons.'),
	cooldown: 5000,
	async execute(interaction) {
		let primaryButton = new MessageButton()
			.setLabel('Primary')
			.setStyle('PRIMARY')
			.setCustomId('blurple_button')
		let secondaryButton = new MessageButton()
			.setLabel('Cancel')
			.setStyle('SECONDARY')
			.setCustomId('grey_button')
		let successButton = new MessageButton()
			.setLabel('Success')
			.setStyle('SUCCESS')
			.setCustomId('green_button')
		let dangerButton = new MessageButton()
			.setLabel('Danger')
			.setStyle('DANGER')
			.setCustomId('red_button')
		let linkButton = new MessageButton()
			.setLabel('Link')
			.setStyle('LINK')
			.setURL('https://ebaa.dev')
		const row = new MessageActionRow().addComponents(
			primaryButton,
			secondaryButton,
			successButton,
			dangerButton,
			linkButton
		)
		interaction.reply({
			embeds: [customEmbed('This is an example of all the buttons you can make.', lightBlue)],
			components: [row],
		})
	},
}
