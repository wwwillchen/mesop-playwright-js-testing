# Mesop Playwright JS Testing Example

## Setup

- Install mesop: `pip install mesop`
- [Install node.js](https://nodejs.org/en/download/package-manager)
- [Install playwright](https://playwright.dev/docs/intro): `npm init playwright@latest`
    - We recommend using TypeScript for better IDE support.


## Run app

```sh
mesop app.py
```

## Run test

```sh
npx playwright test
```

## Writing a test

Run in one terminal:

```sh
mesop app.py
```

In another terminal run:

```sh
npx playwright codegen localhost:32123
```
