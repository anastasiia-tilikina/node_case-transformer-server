const http = require('http');

const { getParams } = require('./getParams');
const { getResponse } = require('./getResponse');

const createServer = () => {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    const params = getParams(req.url);
    const { code, data } = getResponse(...params);

    res.statusCode = code;

    res.end(JSON.stringify(data));
  });

  return server;
};

module.exports = { createServer };
