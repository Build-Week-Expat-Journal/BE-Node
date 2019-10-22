const Users = require('../users/userRouter.js');
const request = require('supertest');
const server = require('../api/server.js');

/* 1. does it return the correct status code for the input provided?
   2. does it return the data in the expected format?
   3. does the data returned, if any, have the right content? */

/* When testing your endpoints, start with those three tests and then move on to write tests that will be unique for the system you’re building.*/

describe('/POST', () => {
  it('should return 201 OK', async () => {
    const call = await request(server)
      .post('/api/users/register')
      .send({ email: 'user1@email.com', password: '123' });
    expect(call.status).toBe(201);
  });
  it('should return a 500 database error', async () => {
    const reg = await request(server).post('/api/user/register');
    expect(reg.status).toBe(500);
  });
});

describe('/POST', () => {
  it('should return 201 OK', async () => {
    const logintest = await request(server)
      .post('/api/auth/login')
      .send({ email: 'user1@email.com', password: '123' });
    expect(logintest.status).toBe(201);
  });
  it('should return a 500 database error', async () => {
    const login = await request(server).post('/api/users/login');
    expect(login.status).toBe(500);
  });
});
