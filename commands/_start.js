/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
  group: 
CMD*/

// Main logic
if (user.telegramid == adminId) {
  // Handle admin start message
  Bot.sendMessage("*👋 Welcome, Admin!\n\nYou’re connected to users through this bot. Simply tag their messages to respond.*")
} else {
  // Handle user start messages
  Bot.sendMessage("*👋 Hello! It’s great to connect with you. Please leave your message, and our admin will get back to you shortly. Thank you!*")
}
