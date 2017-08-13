# DigitalLibrary
	npm packages used Nodejs, Expressjs, Mysql and Istanbul, Mocha, Chai for test case and coverage

## Steps to run
	Make sure you have mysql installed and running on your system.

	 1. Create a database with name `library`
	 2.	Clone or download `digital-library` now
	 3. Goto inside `digital-library` folder
	 4. Open terminal and run `npm start`. Navigate to `http://localhost:4200/`.
	 5. Go to inside server folder
	 6. Open another terminal and run `npm start`. it will start your service

	 Database configuration file you can find here `./server/config`

## Test case and Test coverage
	1. Install Istanbul globally `npm install -g istanbul`
	2. Inside server folder execute `npm run coverage` for test coverage
	3. Run `npm test` for test cases
