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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_07_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDc0LFxuICAgICAgICA3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEzLFxuICAgICAgICA1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDczLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM5LFxuICAgICAgICA3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDkyLFxuICAgICAgICA0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU2LFxuICAgICAgICA3NixcbiAgICAgICAgOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODksXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDUyLFxuICAgICAgICA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4LFxuICAgICAgICA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZSktzU25Vb0xmTHoyT0pOTVJ3NVo1VDN0TVdjU2ozS2JZdFFzdlVHWFlZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyQ29DMml2TVJSLUlJV3pYMFluLXRnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIwOGMwMjA3LWFjNWItNDM2ZC05Y2Q0LWI5Njc4NjI5NWEwNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDczLFxuICAgICAgMTM4LFxuICAgICAgODYsXG4gICAgICAxMTYsXG4gICAgICAyMTksXG4gICAgICAyMzgsXG4gICAgICAxNjMsXG4gICAgICAyNTMsXG4gICAgICAxNDQsXG4gICAgICAyMjksXG4gICAgICAyMixcbiAgICAgIDE0MSxcbiAgICAgIDMyLFxuICAgICAgMTMxLFxuICAgICAgMixcbiAgICAgIDk0LFxuICAgICAgMTI2LFxuICAgICAgODgsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQyLFxuICAgICAgMTI3LFxuICAgICAgMTA4LFxuICAgICAgMTQxLFxuICAgICAgMjM0LFxuICAgICAgNTgsXG4gICAgICA3LFxuICAgICAgMjAwLFxuICAgICAgMTY4LFxuICAgICAgMjMzLFxuICAgICAgMTA2LFxuICAgICAgMTQxLFxuICAgICAgMjIzLFxuICAgICAgOTIsXG4gICAgICAxNTAsXG4gICAgICAxMTUsXG4gICAgICAxOSxcbiAgICAgIDc2LFxuICAgICAgNzEsXG4gICAgICAxNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVRaMjk4SDNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzg5MTIzODgwOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTY2NDE5NDU1Nzk2Mjk6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTytKOFgwUTZ1K2R0UVlZQ0NBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlYXpLS2FaVGd1TVJLVk9mMTlzQjRMcTVwVTViZlZhajdTYnE1cWVQVFRrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVnVmlaU2d1S3VZcU5KanBLOXU2SWJmZC9oWEsyOVpoamFqMlVEWUtyUS9sREIrOUdwb2QzQ21Va3BFUkxEdXVUQ25HNEVEc0Z3QUllRjJjcGxHeENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9jOVpaQTAxYnp1Mk9FV2VueWRxQVFOTGNrRGdHOWxxaC9zWm0xWnFDdlNWeFFjWXBRb1BHaHhCY3FYZU0vK2xtR1k5dlpVSWhSa0xUM2ZrK3FsYWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzg5MTIzODgwOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNTEyNDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCUnNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJScy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
