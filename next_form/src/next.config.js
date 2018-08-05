/* eslint-disable */
const withLess = require('@zeit/next-less');
require('dotenv').config();

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
});
