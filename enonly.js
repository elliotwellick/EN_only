require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

function isEnglish(text) {
  return /^[a-zA-Z0-9/\s.,?!'"/@#]*$/.test(text) || /^\/\w+(@\w+)?$/.test(text); // hope this regex works!!
}

function containsEmoji(text) {
  const emojiRegex = /[\p{Emoji}]/gu;
  return emojiRegex.test(text);
}

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const isGroup = msg.chat.type === 'group' || msg.chat.type === 'supergroup';

  if (!isGroup) {
    bot.sendMessage(chatId, "Hi! Please add me to your group and make me an Admin so I can help manage the messages.");
  }
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const isGroup = msg.chat.type === 'group' || msg.chat.type === 'supergroup';

  if (isGroup && text) {
    const userId = msg.from.id;
    const userFirstName = msg.from.first_name;
    const username = msg.from.username ? `@${msg.from.username}` : userFirstName;

    if (!isEnglish(text) && !containsEmoji(text)) {
      bot.deleteMessage(chatId, msg.message_id)
        .then(() => {
          bot.sendMessage(chatId, `${username}, Please use only English in this group.`);
        })
        .catch((err) => {
          console.error('Failed to delete message:', err);
        });
    }
  }
});

console.log('Bot is running...');
