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

        member.setNickname(`XXT | ${username}`);
    }
};
