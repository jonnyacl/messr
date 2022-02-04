# SSR page

Render some html with react [server side rendering](https://github.com/facebook/react/blob/848e802d203e531daf2b9b0edb281a1eb6c5415d/packages/react-dom/src/server/ReactDOMStringRenderer.js#L16)

Webpack build express server that generates this initial HTML. Webpack bundle javascript which is served in this initial HTML to client to actually do stuff.
