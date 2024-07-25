import * as dotenv from 'dotenv';

// 加载 .env 文件中的环境变量
dotenv.config();

const Config = {
<<<<<<< HEAD
  port: parseInt(process.env?.PORT ?? '3000', 10),
=======
  port: parseInt(process.env?.PORT, 10),
>>>>>>> dev
  google: {
    id: process.env?.GOOGLE_ID,
    secret: process.env?.GOOGLE_SECRET,
    callBack: process.env?.GOOGLE_CALLBACK_URL,
  },
};

export { Config };
