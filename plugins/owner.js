let handler = function (m) {
  // this.sendContact(m.chat, '919633687665', 'Krishnadas', m)
  conn.sendContact(m.chat, '919633687665', 'Krishnadas', m)
  m.reply('wa.me/919633687665')
}

handler.command = /^qw$/i

module.exports = handler
