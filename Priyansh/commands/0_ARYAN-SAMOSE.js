const fs = require("fs");
module.exports.config = {
        name: "samose",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "ARYAN", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "samose",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("Samose")==0 || event.body.indexOf("samosa")==0 || event.body.indexOf("SAMOSE")==0 || event.body.indexOf("SAMOSA")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐀𝐑𝐘𝐀𝐍💐 \n_______________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐒𝐚𝐦𝐨𝐒𝐞\n_______________________",
                                attachment: fs.createReadStream(__dirname + `/noprefix/samosas_lover_here_|_Ricette,_Easy,_Crockpot(360P).mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }