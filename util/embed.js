const { redTick, red, greenTick, green } = require(`./config.json`)
const { EmbedBuilder } = require('discord.js')

//? Error Embed.
function errorEmbed(interaction, description, footer) {
	if (footer == undefined) footer = null
	const errorEmbed = new EmbedBuilder()
		.setDescription(redTick + ` ${description}`)
		.setColor(red)
		.setFooter({ text: `${footer}` })
	interaction.reply({ embeds: [errorEmbed], allowedMentions: { repliedUser: false } })
}
//? Success Embed.
function successEmbed(interaction, description, footer) {
	if (footer == undefined) footer = null
	const successEmbed = new EmbedBuilder()
		.setDescription(greenTick + ` ${description}`)
		.setColor(green)
		.setFooter({ text: `${footer}` })
	interaction.reply({ embeds: [successEmbed], allowedMentions: { repliedUser: false } })
}
//? Custom Embed.
function customEmbed(description, color, emoji, thumbnail, footer) {
	if (emoji == undefined) emoji = null
	if (thumbnail == undefined) thumbnail = null
	if (footer == undefined) footer = null
	const customEmbed = new EmbedBuilder()
		.setDescription(emoji + ` ${description}`)
		.setColor(color)
		.setThumbnail(thumbnail)
		.setFooter({ text: `${footer}` })
	return customEmbed
}
module.exports = { errorEmbed, successEmbed, customEmbed }
