# Trivia Game

## [Demo](https://trivia-game-mp.netlify.com/)

Little bit about the solution:

- Typescript
- React hooks (+hooks based router)
- Redux-saga for separation of concerns between business and UI logic
- Can be easily adapted to multiple-choice questions
- Flexible about the number of questions/diffiiculty (changed in config)
- Proper support for session token with resetting (https://opentdb.com/api_config.php)
- Sagas integration tests with Jest
- E2E tests with Cypress
- Tooling best practices (Prettier, ESLint, Husky/Lint-staged)
- Code splitting with Suspense wrapper
- Error boundries (right now only with Class component)
- JS bundle (black) and Chunk Loader (blue)
- Preload Results screen (we preload on the last question)
- Preload Quiz screen onMouseEnter on Start button

TODO:

- Load chunk (Quiz) and data (questions) at the same time - right now we just preload the Quiz screen, we can also preload the data if we want

## Available Scripts

`yarn install` - Install dependencies  
`yarn start` - Run project in development mode  
`yarn test` - Run Jest tests (also `yarn test:watch`)  
`yarn test:e2e` - Run Cypress E2E tests (also `yarn test:e2:watch` to open the browser)  
`yarn test:all` - Run Jest and Cypress tests  
`yarn build` - To build static version in /build folder  
`yarn deploy` - Used to deploy production version on Netlify (demo)
