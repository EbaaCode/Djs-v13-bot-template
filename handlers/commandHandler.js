const { getFiles } = require('../util/functions')
module.exports = (client) => {
    const commandFiles = getFiles('./commands')
    for (const command of commandFiles) {
        let commandFile = require(command)
        client.commands.set(commandFile.name, commandFile)
        console.log(`\x1b[38;2;249;65;68m[Commands] \x1b[32m${commandFile.name}\x1b[0m has been loaded.`)
    }
}
