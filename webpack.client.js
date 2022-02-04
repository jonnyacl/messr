const path = require("path");

module.exports = (env = {}) => {
  const isEnvProduction = !!env.production;
  console.log(`${isEnvProduction ? "production build..." : "dev build..."}`);
  const base = {
    mode: isEnvProduction ? "production" : "development",
    entry: path.resolve("./src/index.tsx"),
    target: "node",
    devtool: isEnvProduction ? "source-map" : "cheap-module-source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist/client"),
      publicPath: "/",
    },
  };
  return base;
};
