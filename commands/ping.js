const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			guarded: true,
			description: 'Envia o ping do bot com os servidores do Discord'
		});
	}

	async run(message) {
		const msg = await message.send('Aguarde...');
		return message.sendLocale('COMMAND_PINGPONG', [(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp), Math.round(this.client.ws.ping)]);
	}

};
