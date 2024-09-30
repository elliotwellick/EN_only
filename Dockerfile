FROM node:latest

WORKDIR /usr/src/app

RUN npm install node-telegram-bot-api dotenv

COPY . .
# you can pass the token at runtime using -e TELEGRAM_TOKEN=your_token
# or define it in a .env file that you can copy into the container.
COPY .env .env

CMD ["node", "enonly.js"]
