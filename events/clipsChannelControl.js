const { Event } = require('klasa');

module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            name: 'clipsChannelControl',
            event: 'message',
        });
    }

    async run(message) {
        if (message.channel.id !== '768234397568335873') return null;
        
        if(!new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(message.content)) {
            if (message.author.id === '770028698291666944') return;    
            message.delete();   
            const response = await message.reply('**por favor, use este canal apenas para o envio de clipes!**');
            return response.delete({ timeout: 5000});
        }
        return;
    }
};