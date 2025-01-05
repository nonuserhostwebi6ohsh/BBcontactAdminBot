/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// Main logic
if (user.telegramid == adminId) {
  // Handle admin messages
  handleAdminMessage();
} else {
  // Handle user messages
  handleUserMessage();
}
