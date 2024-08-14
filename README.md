# Mesop Playwright Testing Example

## Setup

- Install mesop: `pip install mesop`
- [Install node.js](https://nodejs.org/en/download/package-manager)

## Run app

```sh
mesop app.py
```

## Run test

```sh
npx playwright test
```

- This will ask you to [install playwright](https://playwright.dev/docs/intro) the first time.

## Writing a test

Run in one terminal:

```sh
mesop app.py
```

In another terminal run:

```sh
npx playwright codegen localhost:32123
```
