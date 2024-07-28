/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';

// Paths to the files
const keyPath = './encryption/key.bin';
const ivPath = './encryption/iv.bin';
const encryptedFilePath = './encryption/.env.enc';
const decryptedFilePath = '.env';

// Read the key and IV
const key = fs.readFileSync(keyPath);
const iv = fs.readFileSync(ivPath);

// Decrypt function
const decrypt = (buffer) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(buffer);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted;
};

// Read the encrypted data and decrypt it
const encryptedData = fs.readFileSync(encryptedFilePath);
const decryptedData = decrypt(encryptedData);

// Write the decrypted data to a file
fs.writeFileSync(decryptedFilePath, decryptedData);
console.log('Decryption complete');
