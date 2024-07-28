/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // Generate a random 32-byte key
const iv = crypto.randomBytes(16); // Generate a random 16-byte IV

const encrypt = (buffer) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(buffer);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted;
};

const inputFile = '.env';
const outputFile = './encryption/.env.enc';
const keyPath = './encryption/key.bin';
const ivPath = './encryption/iv.bin';
const data = fs.readFileSync(inputFile);
const encryptedData = encrypt(data);

fs.writeFileSync(outputFile, encryptedData);
fs.writeFileSync(keyPath, key);
fs.writeFileSync(ivPath, iv);

console.log('Encryption complete');
