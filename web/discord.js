const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2({
  clientId: process.env.DISCORD_APP_ID,
  clientSecret: process.env.DISCORD_APP_SECRET,
  redirectUri: process.env.DISCORD_CALLBACK
});

module.exports = oauth;