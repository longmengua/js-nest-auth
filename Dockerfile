# 使用 Node.js 作为基础镜像
FROM node:alpine

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json 文件
COPY package*.json ./

# 安装依赖
RUN yarn install

# 复制应用程序代码
COPY . .

# 构建应用
RUN yarn build

# 暴露应用程序端口
EXPOSE 3000

# 启动应用
CMD ["npm", "run", "start:prod"]
