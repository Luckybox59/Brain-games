install:
	npm install

brain-games:
	npx babel-node -- src/bin/brain-games.js

brain-even:
	npx babel-node -- src/bin/brain-even.js

publish:
	npm publish

lint:
	npx eslint .