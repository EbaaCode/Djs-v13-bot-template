const { MessageEmbed } = require('discord.js')
const { redTick, red, greenTick, green } = require(`./config.json`)

//? Error Embed.
function errorEmbed(interaction, description, footer) {
	if (footer == undefined) footer = ''
	const errorEmbed = new MessageEmbed()
		.setDescription(redTick + ` ${description}`)
		.setColor(red)
		.setFooter({ text: `${footer}` })
	interaction.reply({ embeds: [errorEmbed], allowedMentions: { repliedUser: false } })
}
//? Success Embed.
function successEmbed(interaction, description, footer) {
	if (footer == undefined) footer = ''
	const successEmbed = new MessageEmbed()
		.setDescription(greenTick + ` ${description}`)
		.setColor(green)
		.setFooter({ text: `${footer}` })
	interaction.reply({ embeds: [successEmbed], allowedMentions: { repliedUser: false } })
}
//? Custom Embed.
function customEmbed(description, color, emoji, thumbnail, footer) {
	if (emoji == undefined) emoji = ''
	if (thumbnail == undefined) thumbnail = ''
	if (footer == undefined) footer = ''
	const customEmbed = new MessageEmbed()
		.setDescription(emoji + ` ${description}`)
		.setColor(color)
		.setThumbnail(thumbnail)
		.setFooter({ text: `${footer}` })
	return customEmbed
}
module.exports = { errorEmbed, successEmbed, customEmbed }
