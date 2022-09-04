const { ButtonBuilder, ActionRowBuilder } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { lightBlue } = require(`../../../util/config.json`)
const { customEmbed } = require(`../../../util/embed`)
const { ButtonStyle } = require('discord.js');



//? Using Buttons Example.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('button-example')
		.setDescription('An example command to show how to create buttons.'),
	cooldown: 5000,
	async execute(interaction) {
		let primaryButton = new ButtonBuilder()
			.setLabel('Primary')
			.setStyle(ButtonStyle.Primary)
			.setCustomId('blurple_button')
		let secondaryButton = new ButtonBuilder()
			.setLabel('Cancel')
			.setStyle(ButtonStyle.Secondary)
			.setCustomId('grey_button')
		let successButton = new ButtonBuilder()
			.setLabel('Success')
			.setStyle(ButtonStyle.Success)
			.setCustomId('green_button')
		let dangerButton = new ButtonBuilder()
			.setLabel('Danger')
			.setStyle(ButtonStyle.Danger)
			.setCustomId('red_button')
		let linkButton = new ButtonBuilder()
			.setLabel('Link')
			.setStyle(ButtonStyle.Link)
			.setURL('https://ebaa.dev')

		const row = new ActionRowBuilder().addComponents(
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
