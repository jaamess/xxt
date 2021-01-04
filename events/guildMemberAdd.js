const { Event } = require('klasa');

module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            name: "guildMemberAdd",
            enabled: true,
            once: false
        });
    }

    async run(member) {
        const username = member.user.username;
        const logsChannel = member.guild.channels.resolveID('769797847662592030');

        await member.setNickname(`XXT | ${username}`);
        return logsChannel.send(`**<:amorPaty:767849853094985748> | <@${member.id}> acabou de entrar na XXT.`);
    }
};
