var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.search({
  index: 'store',
  q: 'storeName:燒肉'
}, function (error, response) {
  if (error) {
  }
  else {
    console.log(response);
  }
});




