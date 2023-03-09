const crew = require('../crew.json')
const db = require('croxydb')

module.exports = {
    kod: 'gelen-giden',
    run (client, message, args) {
        if (!args[0]) return message.reply(`**${crew.prefix}gelen-giden ayarla/sıfırla**`)
        if (args[0] === "ayarla") {
            let kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
            if (!kanal) return message.reply(`Bir kanal belirtiniz.`)

            db.set(`gelen_giden_${message.guild.id}`)

            const embed = new MessageEmbed()
            .setDescription(`Başarıyla gelen-giden kanalı ${kanal} olarak ayarlandı.`)
            .setColor('RANDOM')
            .setFooter('Crew 🖤')
            message.reply({ embeds : [embed] })
        }

        if (args[0] === "sıfırla") {
            let kontrol = db.fetch(`gelen_giden_${message.guild.id}`)
            if (!kontrol) return message.reply(`Gelen Giden sistemi zaten kapalı`)

            db.delete(`gelen_giden_${message.guild.id}`)
            
            const embed = new MessageEmbed()
            .setDescription(`Başarıyla gelen-giden sistem kapatıldı.`)
            .setColor('RANDOM')
            .setFooter('Crew 🖤')
            message.reply({ embeds : [embed] })
        }
    }
}
