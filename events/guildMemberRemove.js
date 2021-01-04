const { Event } = require('klasa');

module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            name: "GuildMemberRemove",
            enabled: true,
            once: false
        });
    }

    async run(member) {
        const username = member.user.username;
        const logsChannel = member.guild.channels.resolveID('769797847662592030');

        return logsChannel.send(`** <:f_fortnite:765088007757234196> | ${member.user.username} (ID: ${member.id}) acabou de sair do servidor.**`);
    }
};
