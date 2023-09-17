const http = require('http');

const { getParams } = require('./getParams');
const { getResponseBody } = require('./getResponseBody');

const createServer = () => {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    const params = getParams(req.url);
    const body = getResponseBody(...params);

    res.end(JSON.stringify(body));
  });

  return server;
};

module.exports = { createServer };
