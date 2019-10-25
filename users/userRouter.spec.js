const server = require('../api/server');
const user = require('./userRouter');
const request = require('supertest');
let token;
/* 1. does it return the correct status code for the input provided?
   2. does it return the data in the expected format?
   3. does the data returned, if any, have the right content? */

/* When testing your endpoints, start with those three tests and then move on to write tests that will be unique for the system you’re building.*/

it('should set testing environment', () => {
  expect(process.env.DB_ENV).toBe('testing');
});

describe('GET /', () => {
  // should return http status of 200
  it('should return http status of 200', () => {
    return request(server)
      .get('/')
      .then(response => {
        expect(response.status).toBe(200);
      });
  });
  // should return json
  test('should return JSON', async () => {
    const response = await request(server).get('/');
    // toMatch uses a regular expression to check the value
    expect(response.type).toMatch(/html/i);
  });
});

describe('userRouter.js testing auth routes', () => {
  it('will return 500 server error', async () => {
    const res = await request(server)
      .post('/api/users/login')
      .send({ email: 'roc@email.com', password: '123456' });
    expect(res.status).toBe(500);
  });

  it('returns 201 registration success', async () => {
    let res = await request(server)
      .post('/api/user/registration')
      .send({
        email: 'user1@email.com',
        username: 'user1',
        password: 'pass1',
        confirm_password: 'pass1'
      });
    expect(res.status).toBe(
      {
        email: 'user1@email.com',
        username: 'user1',
        password: 'pass1',
        confirm_password: 'pass1'
      },
      { token }
    );
  });
});
