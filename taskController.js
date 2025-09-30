// taskController.js
const CryptoJS = require("crypto-js");
//const SECRET_KEY = "Add_Secret_Key_Here"; // Comment out if you don't want to use env file
const SECRET_KEY = process.env.ENCRYPTION_KEY;

// Encrypt before saving
const encryptedtitle = CryptoJS.AES.encrypt(task.title, SECRET_KEY).toString();
const encryptedDescription = CryptoJS.AES.encrypt(task.description, SECRET_KEY).toString();
const encryptedDueDateTime = CryptoJS.AES.encrypt(task.dueDateTime, SECRET_KEY).toString();

// Decrypt when retrieving
const bytes = CryptoJS.AES.decrypt(encryptedtitle, SECRET_KEY);
const decryptedtitle = bytes.toString(CryptoJS.enc.Utf8);

const bytes = CryptoJS.AES.decrypt(encryptedDescription, SECRET_KEY);
const decryptedDescription = bytes.toString(CryptoJS.enc.Utf8);

const bytes = CryptoJS.AES.decrypt(encryptedDueDateTime, SECRET_KEY);
const decryptedDueDateTime = bytes.toString(CryptoJS.enc.Utf8);
