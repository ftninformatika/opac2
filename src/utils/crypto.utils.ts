import * as aesjs from 'aes-js';

// TODO: put this on a secret place
const key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const iv = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

export class CryptoUtils {

  public static encryptData(data): string {
    try {
      let textBytes = aesjs.utils.utf8.toBytes(data);
      const aesOfb = new aesjs.ModeOfOperation.ofb(key, iv);
      textBytes = aesOfb.encrypt(textBytes);
      return aesjs.utils.hex.fromBytes(textBytes);
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  public static decryptData(data): string {
    try {
      const encryptedBytes = aesjs.utils.hex.toBytes(data);
      const aesOfb = new aesjs.ModeOfOperation.ofb(key, iv);
      const decryptedBytes = aesOfb.decrypt(encryptedBytes);
      return aesjs.utils.utf8.fromBytes(decryptedBytes);
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
