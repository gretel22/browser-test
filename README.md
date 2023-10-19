# browser-test
Playwright-based option for testing websites in different browsers, as an alternative to Browserstack

## How to use:
1- Install dependencies:
```sh
npm i 
```

2- Edit AllTests/browser.test.ts file to add the page to test and HTTP auth if is needed.

3- In your project root folder run:
for Chrome
```sh
npm run test:chrome
```

for Firefox
```sh
npm run test:firefox
```

for Safari
```sh
npm run test:safari
```

Te get browser and its version copy the content of browserDevConsoleTest.js into the Browser's dev console.