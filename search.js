var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.search({
  index: 'store',
  body: {
    query: {
      filtered: {
        query: {
          term: {
            storeName: '魯'
          }
        },
        filter: {
          geo_distance: {
            distance: '300km',
            location: {
              lat: 24,
              lon: 120
            }
          }
        }
      }
    },
    sort: [{
      _geo_distance: {
        location: '24,120',
        order: 'asc',
        unit: 'km'
      }
    }]
  }
}, function (error, response) {
  if (error) {
  }
  else {
    console.log(response);
  }
});




