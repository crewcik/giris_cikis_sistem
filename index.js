client.on('guildMemberAdd', (crew) => {
    let kanal = db.fetch(`gelen_giden_${crew.guild.id}`)
    if (!kanal) return;

    client.channels.cache.get(kanal).send(`${crew} Aramıza katıldı. Hoşgeldin.. **(${crew.guild.memberCount}**)`)
})

client.on('guildMemberRemove', (crew) => {
    let kanal = db.fetch(`gelen_giden_${crew.guild.id}`)
    if (!kanal) return;

    client.channels.cache.get(kanal).send(`**${crew.user.tag}** Sunucudan ayrıldı. Hoşçakal.. **(${crew.guild.memberCount}**)`)
})
