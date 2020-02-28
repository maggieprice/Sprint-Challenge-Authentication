const request = require("supertest");

const server = require("../api/server.js");


describe("jokes router", function() {
    it("should run the tests", function() {
      expect(true).toBe(true);
    });

    describe("GET /api/jokes", function() {
        it('should return 401', function(){
            return request(server)
            .get('/api/jokes')
            .expect(400)
            .expect('Content-Type', /json/);
            
        });
  });
});
