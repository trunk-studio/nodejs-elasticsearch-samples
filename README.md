# how to use

first first

run elasticsearch, api endpoint will be http://localhost:9200/

install module

```
npm install
```

create indices, import data to elasticsearch

```
node index.js
```

run search with node

```
node search.js
```

same search result with curl

```
curl -X POST http://localhost:9200/store/_search?q=storeName%3A%E7%87%92%E8%82%89
```

