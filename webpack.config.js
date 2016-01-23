/**
 * learning-gulp - webpack.config.js
 * Created by mengdesen on 15/4/14.
 */

'use strict';

module.exports = {
  entry: ["./js/index.js"],
  output: {
    path: __dirname + "/build",
    filename: "{name}.js"
  }
};
