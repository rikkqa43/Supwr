const config = require('../config')
const os = require('os')
const axios = require('axios');
const mimeTypes = require("mime-types");
const fs = require('fs');
const path = require('path');
const { generateWAMessageContent, generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
  pattern: "alive",
  react: "🫟",
  alias: ["online", "test", "bot"],
  desc: "Check if bot is online.",
  category: "main",
  use: ".alive",
  filename: __filename
},
async (conn, mek, m, context) => {
  const {
    from, prefix, pushname, reply, l
  } = context;

  try {
    // Detect hosting environment
    const hostnameLength = os.hostname().length;
    let hostname = "Unknown";

    switch (hostnameLength) {
      case 12: hostname = 'Replit'; break;
      case 36: hostname = 'Heroku'; break;
      case 8:  hostname = 'Koyeb'; break;
      default: hostname = os.hostname();
    }

    // Define default buttons
    const defaultButtons = [
      { buttonId: prefix + 'menu', buttonText: { displayText: 'COMMAND MENU' }, type: 1 },
      { buttonId: prefix + 'ping', buttonText: { displayText: 'BOT SPEED' }, type: 1 }
    ];

    // ALIVE Message - Default Mode
    if (config.ALIVE === "default") {
    
      const buttonMessage = {
        image: { url: config.LOGO },
        caption: `🌐 *Hello ${pushname}!*  
          
🤖 *I’m — always active and ready to assist you!*

`,
        footer: config.FOOTER,
        buttons: defaultButtons,
        headerType: 4
      };

      return await conn.buttonMessage2(from, buttonMessage);
    }

    // ALIVE Message - Custom Mode
    const customButtons = [
      { buttonId: prefix + 'menu', buttonText: { displayText: 'COMMAND MENU' }, type: 1 },
      { buttonId: prefix + 'ping', buttonText: { displayText: 'BOT SPEED' }, type: 1 }
    ];

    const customMessage = {
      image: { url: config.LOGO },
      caption: config.ALIVE,
      footer: config.FOOTER,
      buttons: customButtons,
      headerType: 4
    };

    return await conn.buttonMessage2(from, customMessage, mek);
  } catch (error) {
    reply('*An error occurred while checking bot status.*');
    l(error);
  }
});
