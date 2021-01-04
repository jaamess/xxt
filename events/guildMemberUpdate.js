const { Event } = require('klasa');

module.exports = class extends Event {

    constructor(...args) {

        super(...args, {
            enabled: true,
            once: false
        });
    }

    async run(oldMember, newMember) {
        const oldMemberNickname = oldMember.nickname;
        const newMemberNickname = newMember.nickname;

        if (oldMemberNickname !== newMemberNickname) {
            return newMember.setNickname(`XXT | ${newMember.user.username}`);
        }
    }
};
