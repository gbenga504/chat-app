## Chat App

A simple chat interface

## Basic Usage

- Clone the app
- Check out to the `main` branch
- .env has been pushed with the app (not ideal), this is to permit for easy testing
- Run `yarn start`

## Dependencies

- @material-ui/core: This library was used as the core of our design system. Using tailwind would have sufficed also. As much as possible, I try to use theming throughout the entire system without hardcoding anything.

- date-fns: Used for time formatting.

- react-query: Used to synchronize data between the server and our react app. Also react-query maintains an internal cache I can leverage on so there wasn't any need to include redux

- Husky, prettier and lint-staged: For pre-commit hooks

## Improvements

- I think the solution can be built for production and hosted locally or remotely while Gzipped to enhance performance, this is an area that can be improved upon

- Currently, I did not handle scenarios where a user has a bad network and tries to send a message. As an improvement, I can use a background service using service workers to organize retries

- Errors are not properly being handled yet

- Its important to have a test-driven code; however this codebase lacks that. This is important and it is an area that can be improved on. Using Jest and react-testing library should handle this well.

- Also there are cases where we have data duplication especially if a data was added to the cache manually before all data was loaded. Properly sync between the client and server should fix this.
