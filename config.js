/**
   * Create By Dika Ardnt.
   * Recode By Naze Dev
   * Contact Me on wa.me/6282113821188
   * Follow https://github.com/nazedev
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['94783037971']
global.ownernomer = "94783037971"
global.premium = ['94783037971']
global.packname = '☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒'
global.author = '☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒'
global.sessionName = '☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''

// Setting Mess
global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    error: 'Error!',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 25
}

// Fake
global.thumb = fs.readFileSync('https://i.ibb.co/CMCNByx/Picsart-22-07-03-15-45-00-698.jpg')
global.faall = fs.readFileSync('https://i.ibb.co/CMCNByx/Picsart-22-07-03-15-45-00-698.jpg')

// Url
global.mygit = 'https://youtube.com/channel/UCOlt2_XK6tS2KJn6fTdpPew'
global.myyt = 'https://youtube.com/channel/UCOlt2_XK6tS2KJn6fTdpPew'
global.myytv = 'https://youtube.com/channel/UCOlt2_XK6tS2KJn6fTdpPew'
global.mygc = "https://youtube.com/channel/UCOlt2_XK6tS2KJn6fTdpPew"

// Engak Ngaruh, Belum Kepasang
global.botname = '☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒'
global.akulaku = '☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒'
global.ytname = '𝙿𝚁𝙰𝙼𝙴𝚂𝙷 𝙻𝙸𝙾𝙽 𝙱𝙾𝚃 𝚃𝙴𝙲𝙷' //Kalo Ngk Punya Yt Ngak Usah Di Ganti


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
