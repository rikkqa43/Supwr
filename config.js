const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {

    
SESSION_ID: 'Wxwg3CaT#RCHwyOOiBpcJS4qS70harjlOeMR9Aih4vCF2c-OvAFk',
GITHUB_AUTH_TOKEN: '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',
GITHUB_USER_NAME: 'THEMISADAS2007',


};


