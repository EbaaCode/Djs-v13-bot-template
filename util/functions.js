const { readdirSync } = require('fs')
const { Permissions } = require('discord.js')
const { errorEmbed, customEmbed } = require(`./embed`)
const { redTick, red, errorImage } = require(`./config.json`)

//? Fetch all JS files function.
function getFiles(dir) {
	const files = readdirSync(dir, {
		withFileTypes: true,
	})
	let commandFiles = []
	for (const file of files) {
		if (file.isDirectory()) {
			commandFiles = [...commandFiles, ...getFiles(`${dir}/${file.name}`)]
		} else if (file.name.endsWith('.js')) {
			commandFiles.push(`.${dir}/${file.name}`)
		}
	}
	return commandFiles
}
//? Command cooldown function.
function cooldown(interaction, collection, userID, client) {
	if (client.cooldowns.has(userID)) {
		let timeWord
		let cooldownTime
		if (collection.cooldown >= 60000) {
			if (collection.cooldown == 60000) timeWord = 'minute'
			else timeWord = 'minutes'
			cooldownTime = collection.cooldown / 60000
		} else {
			if (collection.cooldown == 1000) timeWord = 'second'
			else timeWord = 'seconds'
			cooldownTime = collection.cooldown / 1000
		}
		interaction.reply({
			embeds: [
				customEmbed(
					`You are on a \`${cooldownTime}\` ${timeWord} cooldown.`,
					red,
					redTick
				),
			],
			allowedMentions: { repliedUser: false }
		})
		return true
	} else {
		client.cooldowns.set(userID)
		setTimeout(() => {
			client.cooldowns.delete(userID)
		}, collection.cooldown)
	}
}
//? Command permissions function.
function permissions(interaction, collection) {
	if (collection.permissions && collection.permissions.length) {
		let invalidPermissionsFlags = []
		for (const permission of collection.permissions) {
			if (!interaction.member.permissions.has(Permissions.FLAGS[permission])) {
				invalidPermissionsFlags.push(permission)
			} else {
				return false
			}
		}
		errorEmbed(interaction, `You do not have the \`${invalidPermissionsFlags}\` permissions.`)
		return true
	}
}
module.exports = { getFiles, cooldown, permissions }
