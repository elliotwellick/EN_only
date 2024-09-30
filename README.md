# English Only Telegram Bot for Group Chats

This Telegram Bot helps manage messages in group chats by making sure people only use English.

## Features

- Checks messages in group chats and deletes any that are not in English.
- Notifies users when their message is deleted, reminding them to only use English.

## Requirements

- Node.js
- Docker (optional, for using containers)
- A Telegram bot token (get one from [BotFather](https://core.telegram.org/bots#botfather))

## Installation

1. Create a `.env` file in the main folder and add your Telegram bot token:

   ```plaintext
   TELEGRAM_TOKEN="your_telegram_bot_token"
   ```

3. Install the required packages:

   ```bash
   npm install node-telegram-bot-api dotenv
   ```

4. Run the bot:

   ```bash
   node enonly.js
   ```

## Docker

1. Build the Docker image:

   ```bash
   docker build -t enonly-bot .
   ```

2. Run the Docker container, adding your Telegram token:

   ```bash
   docker run -e TELEGRAM_TOKEN=your_telegram_bot_token enonly-bot
   ```
 Or if you already placed bot token in .env file, you can simply start the docker image by :
 ```bash
 docker run enonly-bot 
 ```

## Usage

- Add the bot to your group and make it an admin.
- Start chatting in the group. The bot will check messages and enforce the en-language rule.

## License

![WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-1.png)


