# basic-express-server

I will be building a basic Express server using best practices, including server modularization, use of middleware, and tests.

## Task Submission

1. [PR Link](https://github.com/karamalqinneh/basic-express-server/pull/6)
2. [Deployed Version](https://karam-basic-express-server.herokuapp.com/)

## Task General Notes

1. Middlewares must have the next parameter.
2. To create an "Application-Level" middleware you'll have to use it before the routes and it should always have the next parameter.
3. To test the server using supertest you should:
   1. Import the server
   2. Define a new variable & call the server.app on the supertest method
   3. Use the new variable to test the server.
   4. This will create a fake server for testing only
4. To test the console.log using jest you should:
   1. Define an empty req, res variables
   2. Use jest.fn() to create an empty function to imitate the next function.
   3. Before each method will be called before each unit test. We'll use it to call the method `jest.spyOn(console, "log").mockImplementation();` As it it's a built in method on jest to read the console.
   4. After all will be called once all the unit tests are done.
   5. `toHaveBeenCalled()` is a jest bulit in method that checks if the parama was called.
