import CryptoJS from 'crypto-js';

// Secret key and IV for AES encryption
const secretKey = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f'); // 32 bytes key
const iv = CryptoJS.enc.Hex.parse('5ae3471fa240d01d3ba87dc59c5cc06c'); // 16 bytes IV

/**
 * Decrypts the given encrypted text using AES decryption with CTR mode and NoPadding.
 * @param {string} encryptedText - The encrypted text to decrypt.
 * @returns {string} The decrypted text in string format.
 */


interface ResponseAPI{
    data:any
}


function decrypt(encryptedText:ResponseAPI):any {
    const decrypted = CryptoJS.AES.decrypt(encryptedText.data, secretKey, {
        iv: iv,
        mode: CryptoJS.mode.CTR,
        padding: CryptoJS.pad.NoPadding
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}


export function DecryptResponse(data: ResponseAPI): any {  
    // Encrypt the JSON string
    const decrypted = decrypt(data);
    // Return the updated request body
    return JSON.parse(decrypted)
  }
  