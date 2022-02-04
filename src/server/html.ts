const html = (body: string) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
      <div id="app">${body}</div>
    </body>
    <script src="index.js"></script>
  </html>
`;

export default html;
