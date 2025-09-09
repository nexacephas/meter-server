// server/firebase/admin.js
const admin = require("firebase-admin");
const path = require("path");

const serviceAccount = require(path.join(__dirname, "../firebase/serviceAccountKey.json"));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://smart-meter-2025-c7b32-default-rtdb.firebaseio.com" // just the root
  });
}

const db = admin.database();
module.exports = db;
