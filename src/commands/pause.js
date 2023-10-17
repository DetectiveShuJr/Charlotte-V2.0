module.exports = {
	name: 'pause',
	description: 'Pause command.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ Okay the song is paused');
		}
		return message.channel.send('What are you playing at? There\'s nothing playing');
	}
};

module.exports.config = {
    name: "pause",
    description: "I have no idea how to define this one... It just pauses the song",
    usage: "Fs!pause",
    accessableby: "Members",
    aliases: []
}
