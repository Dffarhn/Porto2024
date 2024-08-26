import CryptoJS from 'crypto-js';

// Secret key and IV for AES encryption
const secretKey = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f'); // 32 bytes key
const iv = CryptoJS.enc.Hex.parse('5ae3471fa240d01d3ba87dc59c5cc06c'); // 16 bytes IV

/**
 * Encrypts the given plaintext using AES encryption with CTR mode and NoPadding.
 * @param {string} plaintext - The plaintext to encrypt.
 * @returns {string} The encrypted text in string format.
 */
function encrypt(plaintext: string): string {
  const encrypted = CryptoJS.AES.encrypt(plaintext, secretKey, {
    iv: iv,
    mode: CryptoJS.mode.CTR,
    padding: CryptoJS.pad.NoPadding,
  });
  return encrypted.toString();
}

/**
 * Encrypts the request body and updates the request with the encrypted data.
 * @param {any} data - The request body data to encrypt.
 * @returns {any} The updated request body with encrypted data.
 */

export function EncryptRequest(data: any): any {

  let body = JSON.stringify(data); // Convert data to JSON string

  // Encrypt the JSON string
  const encrypted = encrypt(body);

  // Create a new JSON object with the encrypted data
  const jsonBody = { data: encrypted };

  // Return the updated request body
  return JSON.stringify(jsonBody);
}
