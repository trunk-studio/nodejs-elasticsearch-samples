var elasticsearch = require('elasticsearch');
var fs = require('fs');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

//console.log(client);

client.ping({
  // ping usually has a 3000ms timeout
  requestTimeout: Infinity,

  // undocumented params are appended to the query string
  hello: "elasticsearch!"
}, function (error) {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
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
      latitude:  json[i].latitude,
      longitude: json[i].longitude
    }
  }, function (error, response) {});

}
