# how to use

first first

run elasticsearch, api endpoint will be http://localhost:9200/

```
docker run -d -p 9200:9200 -p 9300:9300 --name elasticsearch elasticsearch:2.1.1
```

install module

```
npm install
```

init mappings

```
node init.js
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

