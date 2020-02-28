const request = require("supertest");

const server = require("../api/server.js");

    describe("login", function() {
        it('should return json', function(){
            return request(server)
            .post('/api/auth/login')
            .send({ username: 'maggie', password: 'test'})
            .expect(200)
            .expect('Content-Type', /json/);
        });
  });

  describe("login wrong password", function() {
    it('should return json', function(){
        return request(server)
        .post('/api/auth/login')
        .send({ username: 'maggie', password: "wrong" })
        .expect(401)
        .expect('Content-Type', /json/);
    });
});
