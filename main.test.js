const assert = require('assert');
const http = require('http');
const server = require('./index');
const PORT = 9393;

describe('index.js', () => {
  before(() => {});

  after(() => {
    server.close();
  });

  it('should return a response with status code 200', (done) => {
    http.get(`http://localhost:${PORT}`, (res) => {
      assert.strictEqual(res.statusCode, 200);
      done();
    });
  });

  it('should return a response with HTML content', (done) => {
    http.get(`http://localhost:${PORT}`, (res) => {
      let html = '';
      res.on('data', (chunk) => {
        html += chunk;
      });
      res.on('end', () => {
        assert.strictEqual(html.includes('<h1>The HTMl5 Template</h1>'), true);
        done();
      });
    });
  });
});
