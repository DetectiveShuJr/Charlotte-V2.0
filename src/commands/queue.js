module.exports = {
	name: 'queue',
	description: 'Queue command.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There isn\'t anything playing moron');
		return message.channel.send(`
__**Song queue:**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

**Now playing:** ${serverQueue.songs[0].title}
		`);
	}
};

module.exports.config = {
    name: "queue",
    description: "You can check your queue or create one by using Fs!play more then once",
    usage: "Fs!queue",
    accessableby: "Members",
    aliases: []
}