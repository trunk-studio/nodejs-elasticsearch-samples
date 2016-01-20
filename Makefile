test:
	node init.js
	node index.js
	node search.js

clean:
	curl -XDELETE localhost:9200/store
