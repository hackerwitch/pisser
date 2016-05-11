var levelup = require('levelup');
var db = levelup('./dbbbb', { db: require('memdown') });

var Places = require('level-places');

var places = Places(db);

places.add('Kaufbeuren', 47.8800, 10.6225);
places.add('New York', 40.7142, -74.0064);

places.createReadStream(47.8838, 10.6171, { limit: 1 })
      .on('data', console.log);
  // => "Kaufbeuren" ""
