export function generateShortUUID(): string {
  // 生成 8 位的随机十六进制字符串
  return (Math.random().toString(16) + '0000000000000000').slice(2, 10);
}
