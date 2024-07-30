const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94789123880";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_16_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA3MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDczLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MixcbiAgICAgICAgMjQxLFxuICAgICAgICA3NyxcbiAgICAgICAgODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA3LFxuICAgICAgICA5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzksXG4gICAgICAgIDg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDczLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIi92MzhNOHBiV3oyWFQ0dVgxanp3NEg3WlJJZ1c4elloSm1uQk5rdEZVSkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldaMktNcFVNUzFTU01STWhJOWtSOVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGJjZGRmYjItZTQwYi00M2ZjLWIxMzUtYTIwZmYyZjc0NThlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDE3NyxcbiAgICAgIDEsXG4gICAgICA0NixcbiAgICAgIDE3NyxcbiAgICAgIDE0NCxcbiAgICAgIDE4MixcbiAgICAgIDIwNCxcbiAgICAgIDEwLFxuICAgICAgMjA0LFxuICAgICAgMTMwLFxuICAgICAgNzQsXG4gICAgICA4MyxcbiAgICAgIDUxLFxuICAgICAgMCxcbiAgICAgIDExMixcbiAgICAgIDEzLFxuICAgICAgMjIwLFxuICAgICAgMTAyLFxuICAgICAgMjA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDIyNSxcbiAgICAgIDE4MyxcbiAgICAgIDE2NCxcbiAgICAgIDE0OSxcbiAgICAgIDE4MyxcbiAgICAgIDExMCxcbiAgICAgIDgsXG4gICAgICA4NSxcbiAgICAgIDI1MCxcbiAgICAgIDEzNCxcbiAgICAgIDIyMSxcbiAgICAgIDEzOCxcbiAgICAgIDE3LFxuICAgICAgMTc4LFxuICAgICAgNjAsXG4gICAgICAyNTMsXG4gICAgICAxMixcbiAgICAgIDEyNCxcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjE2RVY3UlA4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwNTA1OTY5MDoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjYxNzI1OTQ2OTYyNTQ6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTdrOUo4RUVKYjBuYlVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzWGpOWW5VZy9iQklWM3FJTCtXWjRmYUdTYVcwMkpOcU5Jem12L1NKUERFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNiWmRWeURtVVh5WjY4eDBwRVd1QjlJUFZLT29zdzRxWkxyLzhLL0FWVloxV25tdUpLd2hCZCtLNnBQeW9nV3IzVXh4Vnozd1o1YXRwaitKY0JaY0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInV5QlBqME5uQnhuU0hqd2hXaHQyUUxySU1FOGg0R1pqSnV1dnZuQkpBMk0vUWd3eERvZmprcGdDR3JxTEhRNVE3Q0RSQmsxMnc2NWNRd2pXbUNYeGl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzA1MDU5NjkwOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjUxODAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjVmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKNWYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0WXUyYUE5b2JnQUtjSFdLZHVTS2FYbnBRdTZMR0VQN1pFL0FlMzk3TDdvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNDA2NjY4OTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjA1MTQwMjkwN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
