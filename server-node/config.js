/** @format */

var admin = require("firebase-admin");
var serviceAccount = require("./testing-bff3e-firebase-adminsdk-blbx9-5574695bd8.json");
admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL: "https://testing-bff3e-default-rtdb.firebaseio.com",
});
module.exports = admin;
