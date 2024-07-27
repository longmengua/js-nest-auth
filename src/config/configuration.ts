import * as dotenv from 'dotenv';

// 加载 .env 文件中的环境变量
dotenv.config();

const Config = {
  port: parseInt(process.env?.PORT ?? '3000', 10),
  google: {
    clientID: process.env?.GOOGLE_ID,
    clientSecret: process.env?.GOOGLE_SECRET,
    callbackURL: process.env?.GOOGLE_CALLBACK_URL,
  },
  apple: {
    clientID: process.env?.APPLE_CLIENT_ID,
    teamId: process.env?.APPLE_TEAM_ID,
    keyID: process.env?.APPLE_KEY_ID,
    key: process.env?.APPLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    callbackURL: process.env?.APPLE_CALLBACK_URL,
  },
};

export { Config };
