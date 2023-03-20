/**
 * This test suite includes test cases of Login API
 */
let supertest = require('supertest');
let server = supertest.agent('https://reqres.in')
let expect = require('chai').expect;

describe('Login API Test Suite', () => {

    //test

    it('it should login when pass valid email and password', () => {
        server
            .post('/api/login')
            .send(
                {
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                }
            )
            .end(function (err, res) {
                if (!err) {
                    expect(res.statusCode).to.equal(200)
                    expect(res.body).to.have.property('token')
                }
                else throw err;
            })
    })
});