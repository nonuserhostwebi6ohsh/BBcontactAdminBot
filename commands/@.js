/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// Allow only private chats
if (chat.chat_type !== "private") {
  return; // Exit if the chat is not private
}

// Admin Telegram ID
const adminId = "admin_telegram_id";

// Function to handle admin messages
function handleAdminMessage() {
  // Check if the admin is replying to a forwarded message
  if (request.reply_to_message && request.reply_to_message.forward_from) {
    const originalSenderId = request.reply_to_message.forward_from.id;

    // Copy the admin's reply to the original sender
    Api.copyMessage({
      chat_id: originalSenderId,
      from_chat_id: adminId,
      message_id: request.message_id
    });

    return; // Exit after handling the reply
  }
}

// Function to handle user messages
function handleUserMessage() {
  // Forward the user's message to the admin
  Api.forwardMessage({
    chat_id: adminId,
    from_chat_id: user.telegramid,
    message_id: request.message_id
  });
}

