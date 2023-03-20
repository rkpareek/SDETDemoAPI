
let supertest = require('supertest')
let server = require("supertest").agent('https://reqres.in')
let expect = require('chai').expect;

describe('Register API Cases', function (done) {
    this.timeout(2000);


    it('It should login with valid password', function (done) {
        server
            .post('/api/login')
            .send({
                "email": "eve-holt.dfgh@reqres.in",
                "password": "pistol"
            }
            )
            .end(function (err, res) {
                if (!err) {
                    console.log(res.body)
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.have.property("id", 6);
                    expect(res.body).to.have.property("token")
                }
                else throw err;
            });
        done();
    });

    it('It not should login with invalid password', function (done) {
        server
            .post('/api/login')
            .send({
                "email": "eve-holt.dfgh@reqres.in",
                "password": "asfrgery"
            }
            )
            .end(function (err, res) {
                if (!err) {
                    console.log(res.body)
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.have.property("id", 6);
                    expect(res.body).to.have.property("token")
                }
                else throw err;
            });
        done();
    })

});