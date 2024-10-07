const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { en, es, ar, id, pt, rs } = require('./libs/idiomas/total-idiomas.js')
const axios = require('axios')

//---------[ PROPIETARIO/OWNER ]---------
global.owner = [["5493405480284", "𝑳𝒐𝒃𝒐", true], [""], [""], [""]]
global.mods = []
global.premium = []
global.blockList = []

//---------[ NOMBRE/INFO ]---------
global.pagina = "https://www.atom.bio/lobo_owner/"
global.botname = "𝑯𝒂𝒌𝒂𝒓𝒊-𝑩𝒐𝒕-𝑴𝑫"
global.wm = 'Team Nakano'
global.vs = '1.2'
global.creador = '𝑳𝒐𝒃𝒐'
global.creador2 = '𝑳𝒐𝒃𝒐'
global.name = '𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐'
global.nunber = Math.floor(Math.random() * (27 - 18 + 1)) + 18;




//Función beta : escribe el número que quiere que sea bot para que mande el Código de 8 digitos
global.botNumberCode = "" //Ejemplo: +50231458537
global.phoneNumber = ""

//---------[ FECHA/IDIOMAS ]---------
global.place = 'America/Managua' // Aquí puedes encontrar tu ubicación https://momentjs.com/timezone/
global.lenguaje = es //Predeterminado en idioma Español 
global.prefix = [`/`]

//---------[ APIS GLOBAL ]---------
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']; 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]; 
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']; 
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]; 
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']; 
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]; 
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.APIs = {
//ApiEmpire: 'https://',
CFROSAPI: 'https://api.cafirexos.com',
nrtm: 'https://fg-nrtm.ddns.net',
fgmods: 'https://api.fgmods.xyz', 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',
rose: 'https://api.itsrose.site',
popcat: 'https://api.popcat.xyz',
xcoders: 'https://api-xcoders.site',
vihangayt: 'https://vihangayt.me',
erdwpe: 'https://api.erdwpe.com',
xyroinee: 'https://api.xyroinee.xyz',
nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': 'GataDios',
'https://api.neoxr.my.id': `${keysneoxr}`,
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren',
'https://api.xyroinee.xyz': 'uwgflzFEh6'
};
 
//---------[ STICKERS ]---------
global.packname = ""
global.author = `{
 "bot": "𝑯𝒂𝒌𝒂𝒓𝒊-𝑩𝒐𝒕"
  "autor": "𝑻𝒆𝒂𝒎-𝑵𝒂𝒌𝒂𝒏𝒐",
  "version": "1.2",
  "creador": "𝑳𝒐𝒃𝒐"
}
`
 
//-----------------IMAGENES---------
global.vid1 = "https://a.uguu.se/pgQUNPne.mp4"
global.img = "https://i.ibb.co/Dz7f9ys/file.jpg";
global.img1 = 'https://i.ibb.co/h8HRRHS/file.jpg';
global.img2 = 'https://i.ibb.co/L61p7xX/file.jpg';
global.img3 = 'https://i.ibb.co/wcD4T12/file.jpg';
global.img4 = 'https://i.ibb.co/HKBhWpc/file.jpg';
global.img5 = 'https://i.ibb.co/tJBLjgK/file.jpg';
global.img6 = 'https://i.ibb.co/j6FQzvz/file.jpg';
global.img7 = 'https://i.ibb.co/P4JCSkp/file.jpg';
global.img8 = 'https://i.ibb.co/JrKFFJK/file.jpg';
global.img9 = 'https://i.ibb.co/WssYvPs/file.jpg';


global.imagen1 = fs.readFileSync('./media/menu.jpg')
global.imagen2 = fs.readFileSync('./media/menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menu3.jpg')
global.imagen4 = fs.readFileSync('./media/menu4.jpg')
global.imagen5 = fs.readFileSync('./media/menu5.jpg')
global.noperfil = fs.readFileSync('./media/sinfoto.jpg')
global.verificar = fs.readFileSync('./media/menu2.jpg')

//---------[ ENLACES ]---------
global.md = 'https://github.com/LOBO50K/THE-QUINTUPLETS-.git'
global.yt = 'https://youtube.com/@lobo_randomoficial?si=GxLry9SgdUG2S9cF'
global.tiktok = 'https://www.tiktok.com/@am_edit_fav?_r=1&_d=e9c72al298gkh1&sec_uid=MS4wLjABAAAAyfSaQRyrSWd1Fw7IQfinWcBaNIGkHm2f295sfo3LRwneggDFeCAmM_hWvSKHDjvZ&share_author_id=7005212041620538374&sharer_language=es&source=h5_m&u_code=dkf3gkald2ec5e&timestamp=1728232353&user_id=7005212041620538374&sec_user_id=MS4wLjABAAAAyfSaQRyrSWd1Fw7IQfinWcBaNIGkHm2f295sfo3LRwneggDFeCAmM_hWvSKHDjvZ&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7413037136595650310&share_link_id=14baf42b-74db-458f-aacd-dd5d1fdca13a&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1'
global.fb = ''
global.faceb = ''
global.paypal = '' 

global.host = '' //
global.nna = 'https://whatsapp.com/channel/0029VaXDEwlC1FuFm82otA0K' //
global.nn = 'https://chat.whatsapp.com/DToXV6TAU8xFH1vBFT9lrq' //grupos OFC
global.nn2 = 'https://chat.whatsapp.com/LlWSHEMR67ZE8t8mfLm8fu' //soporte
global.n2 = "https://whatsapp.com/channel/0029VaXDEwlC1FuFm82otA0K"
//---------[ INFO ]--------- 
global.info = { wait: '[■□□□□□□□□□] 10%', 
waitt: '[■■□□□□□□□□] 20%', 
waittt: '[■■■□□□□□□□] 30%', 
waitttt: '[■■■■□□□□□□] 40%', 
waittttt: '[■■■■■□□□□□] 50%',
waitttttt: '[■■■■■■□□□□] 60%',
waittttttt: '[■■■■■■■□□□] 70%',
waitttttttt: '[■■■■■■■■□□] 80%',
waittttttttt: '[■■■■■■■■■□] 90%',
waitttttttttt: '▒▒▒▒▒▒▒▒▒▒ 100% ᴄᴏᴍᴘʟᴇᴛᴇ!',
result: `${lenguaje['exito']()}`,  
admin: `${lenguaje['admin']()}`, 
botAdmin: `${lenguaje['botAdmin']()}`, 
owner: `${lenguaje['propietario']()}`, 
premium: `${lenguaje['prem']()}`,                
group: `${lenguaje['group']()}`, 
private: `${lenguaje['private']()}`, 
bot: `${lenguaje['bot']()}`, 
error: `${lenguaje['error']()}`, 
advertencia: `${lenguaje['advertencia']()}`, 
registra: `${lenguaje['registra']()}`, 
limit: `${lenguaje['limit']()}`, 
AntiNsfw: `${lenguaje['AntiNsfw']()}`,
endLimit: `${lenguaje['endLimit']()}`, }
global.rwait = '🔁'
global.dmoji = '😯'
global.done = '✔️'
global.error = '🚫'
global.xmoji = '💞'

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 100 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '4' // máxima advertencias 

//----------------------------------------------------

let file = require.resolve(__filename) 
fs.watchFile(file, () => { 
fs.unwatchFile(file)
const fileName = path.basename(file)
console.log(chalk.greenBright.bold(`Update '${fileName}'.`)) 
delete require.cache[file] 
require(file) 
})
