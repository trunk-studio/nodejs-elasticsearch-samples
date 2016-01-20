var elasticsearch = require('elasticsearch');
var fs = require('fs');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

var json = JSON.parse(fs.readFileSync('24.json', 'utf8'));
//console.log(json);

for (var i in json) {
  console.log("indexing: ",json[i].id + "," + json[i].storeName+","+json[i].latitude+","+json[i].longitude);

  client.index({
    index: 'store',
    type: 'mytype',
    id: json[i].id,
    body: {
      storeName: json[i].storeName,
      location: {
        lat: json[i].latitude,
        lon: json[i].longitude
      }
    }
  }, function (error, response) {});

}
