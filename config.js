//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349164718113";
global.owner = process.env.OWNER_NUMBER || "2349032455387";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VaSi9HWlFjYnV0MkNGb2t2UkZNQzc0VVNiZFRTM3JzczdmRzhnYXozdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjFqWkdPaWRGSzhOTmoxQ3hkSEVGMnIxLzJxdy8ycUxrbEt2bEt6d1gyUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwUEZpdjZpRkNsT3JXcGlyYUlQTWJ2Uk9LekRsUGg0NXZUQ2FhOERIVkZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrN0d3eGVIWG5EMWt5UmNrVS9xS08xTS9XVzhZc1cxYnZEOU5QK2QvNVg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldPd0FFYU1IeGlWQjZUSEZKakVtbGdkR2xQQ1lESWVmMkxBUTlhRHpZMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitqUVBvZmlSaTcxMERNb3lNaFNRLzN3VExyZjJneHQ4dlA1VEFEUDc0R289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElud3J5cmt1R0RaS25HLzFNRCsyRkhmV0pvaS9ycmJSMTBRMDNoalprWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTMyTEtlNmJ2L1kzWVUzSUFIVmlBN2FLS1hOZHRXZXRUSE1TVncyOHRBND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino2dk9WRzUxTEVleWZKNE9SeG53SmFqeHJyNEY3Ung4K3pTMytDbG0xY2VJeXh2N21jeHlobnBycjFBeVV3eHZ0cm0reXFYbXBiMTh2dm5CaG5QOEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6Imt6UDI1ZHBoK3lLcXZESEE4WTVhczJpK0RUVzljdEJOenBVLzJVNWRxcFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFobDNwNEtiUldlejF5YzREeTVHNHciLCJwaG9uZUlkIjoiZTNhNjA4YmMtY2IyYS00NjdjLWEwZGUtYWNmMjVlZGE2YTZjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpLWjRvc0NFSG53cFZ2T2M3RlVYQXY4TWFhOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSRmNVZVRQdm80cEJJbktURVRUY3ljVFdFQ1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVDZUN0RXQUYiLCJtZSI6eyJpZCI6IjIzNDkwMzI0NTUzODc6OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnU4dElzQ0VKdkJuN2tHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRGltWm5sYXlnUGNraU4vVGhLd1ZmQlFwcWEzYkYyZEFJOXhRa0lGMmptWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM1N5b1p1TU9Wd2Ewb091ZlBjSDVNcW9ZOEZVSjIzbFYzSmI4TDdHbnRsZjk1MXd2SFZTOUhKb1JCUzJDbll1emY4V2IyaDRYWFVrVVp1TTM0cjNnQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IkZHbytwVXh3Tnp0dC8zMEVrZGlGeXVXdEJacGNoQ1pnOWllZlppNDhmSFN0SW9ZK3VJQTBLcmpYS0hFa0taOFl5ZG9PeDZXNTh5MW9reFZlUktkUkFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAzMjQ1NTM4Nzo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE0cG1aNVdzb0QzSklqZjA0U3NGWHdVS2FtdDJ4ZG5RQ1BjVUpDQmRvNW0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA2NjY2NjUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSHQ1In0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`☯︎mat in✌︎💨™`",
  author: process.env.PACK_AUTHER || "☯︎mat in✌︎💨",
  packname: process.env.PACK_NAME || "☯︎mat in✌︎💨",
  botname: process.env.BOT_NAME || "☯︎mat in✌︎💨",
  ownername: process.env.OWNER_NAME || "☯︎mat in✌︎💨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "☯︎mat in✌︎💨").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
