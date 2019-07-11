const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccount.json");
var fs = require('fs');

// Initiate Firebase App
firestoreService.initializeApp(
  serviceAccount,
  "database_url"
);

const main = {};


// Firebase Import data from firestore database
firestoreService
  .backups([
    "collection 1",
    "collection 2",
  ])
  .then(collections => {
    fs.writeFile("fileName.json", JSON.stringify(collections), function(err) {
        if (err) {
            console.log(err);
        }
    });
    
  });
