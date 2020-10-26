const { Event } = require('klasa');

module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            name: 'clipsChannelControl',
            enabled: true,
            event: 'message',
            emitter: client,
            once: false
        });
    }

    run(message) {
        if (!message.channel.id === '768234397568335873') return;

        const isURL = async (message) => {
            const checkURl = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(message);
            if (checkURl) return true;
            return false;
        }
        
        if(!isURL) {
            message.delete();
            return message.reply('**por favor, use este canal apenas para o envio de clipes!**');
        }
        return;
    }
};