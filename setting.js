const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With KIRA-MD Hear
SESSION_ID: process.env.SESSION_ID || "KIRA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZtaldoTlZpUEVCZlVyVGZMV1Zrby9zLzlkOXRRSVpNbkhZUkd1UTJucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXMwdG1ORVJPK21WV0tGdklVaFQ3Nk9pSUV4eUNJUU1EcmpXeUdWTlZCND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRREN1L3l3Z2ZRcXowM2pNajZCeDQ2NG93TkMvWWpnQk9uOUJBdTJwTm1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYN2RuYVA1SWNUNURxSjRBOVJCeVh6S0ZKR1daQjhYRnlKUXpSZnZoeVN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRNNFpLNmlvQUpnOUNUbGRadzljM3dLOG81TWpTZFVrM2JZVXNOY2w2RUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5PakxlSmsvMXFZNnNHeXQ3dmxOd3RMcnNGL3EyRFZEQWNXWjNpeXZEZzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJIay9jdDFMdVdIMDd4ME93dnorSC8zRUVZTVdHZ1VleFVaY0k5Yk5uWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjhWQklCNUltTXhxZXFwN2VuZkMzTGFtRmRYTVdYR0t2SFBzWWFBTGhpUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk3WUxqc3hhcDI2N0MvZ3doVFE2cTZKZ0MzUEdOVm0vWERnU0dyOXd5eEJRK0RzaTRKNkFlZ3BUN2RrYjFKMDJXV0V2N3hkOS9weVIrbGRoNU0xcGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiIzN0hiV293ZTBEZVhBTHQ1TjlKVXN1TkVjR05uUWNaZS9XMHpRQS9POUhFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgxMzMyOTU3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQ0Q0MDI0OTg3MEMxMzk5RkNFNDdDQjgyQTREQzU3MyIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc2NzU4ODg0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc4MTMzMjk1N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUM3QzRDMzhBQUVCMTI0RjYzNUYzRUUzM0Q4NDE4MjkiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3Njc1ODg4NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODEzMzI5NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDRTdFQUVCMjI3OTI3MkY0NjkwQjk3MzgxNURBRjMzIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzY3NTg4ODZ9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiU1Y2NU5DUEciLCJtZSI6eyJpZCI6Ijk0NzgxMzMyOTU3OjQ0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjA2NzMwMjk4NDAwODc1OjQ0QGxpZCIsIm5hbWUiOiLiiasgQPCdmYTwnZmO8J2Zg/CdmLzwnZmJLfCdmZMg4omrIPCfh7Hwn4ewIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNek1wQklRMnVDY3p3WVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBQW8xT1dtNzM4WjRNazAyUEVHRmxRQ09FclBiTWhCbXpGZGJRdUhCT2xFPSIsImFjY291bnRTaWduYXR1cmUiOiJKVHpQdkJKMk1rSytJeHg5Tk1HWTVDODI3dUdyT0hFTUd0Z2xuTERpbHlSTUdKQnRBRW9LS1BEdDFja1dSUFYvL3BRK2lRb3E1M0tHaGphK0JKN2dEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRTZYc0pwMjFCOEgwRUFPR1dzUzI0M2tMVTNjMmtuSTNvTnp1WHorRG9iU2ZyV2NUS2hrdFZuSG5HSzFIaFRGNWhpYnZoalpNVU9INkFkUWdSKzBkaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMDY3MzAyOTg0MDA4NzU6NDRAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFBS05UbHB1OS9HZURKTk5qeEJoWlVBamhLejJ6SVFac3hYVzBMaHdUcFIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBc0lDQWdTIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3Njc1ODg4MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCa0IifQ==",
// KIRA MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// KIRA MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY KIRA-MD 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KIRA-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "KIRA-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







