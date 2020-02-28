const request = require("supertest");

const server = require("../api/server.js");


    describe("register", function() {
        it('should return json', function(){
            return request(server)
            .post('/api/auth/register')
            .send({ username: 'maggie1', password: 'test1'})
            .expect('Content-Type', /json/);
        });
  });

  describe("register without password", function() {
    it('should return json', function(){
        return request(server)
        .post('/api/auth/register')
        .send({ username: 'maggie2'})
        .expect(500)
        .expect('Content-Type', /json/);
    });
});