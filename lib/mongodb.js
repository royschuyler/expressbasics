var mongo = require('mongodb').MongoClient;

  if (!global.db) {
    mongo.connect(process.env.MONGODB_URL, function (err, db) {
      global.db = db;
    })
  };

