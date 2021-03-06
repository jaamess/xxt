const { Event } = require('klasa');

module.exports = class extends Event {

    constructor(...args) {

        super(...args, {
            name: "guildMemberUpdate",
            enabled: true,
            once: false
        });
    }

    async run(oldMember, newMember) {
        const oldMemberNickname = oldMember.nickname;
        const newMemberNickname = newMember.nickname;

        if (!newMemberNickname.startsWith("XXT |")) {
            return newMember.setNickname(`XXT | ${newMember.user.username}`);
        }
    }
};
