# SSR page

Render some html with react [server side rendering](https://github.com/facebook/react/blob/848e802d203e531daf2b9b0edb281a1eb6c5415d/packages/react-dom/src/server/ReactDOMStringRenderer.js#L16)

Webpack build express server that generates this initial HTML. Webpack bundle javascript which is served in this initial HTML to client to actually do stuff.

## Getting started

### Develop

`yarn`
`yarn start:dev` -> nodemon listens to updates and bundles on file changes

### Build

`yarn build` -> webpack bundles client and server javascript
`yarn build:server` -> webpack bundles server javascript
`yarn build:client` -> webpack bundles client javascript

### Build production

`yarn build:prod` -> webpack bundles client and server javascript with production environment variable to bundle in production mode
