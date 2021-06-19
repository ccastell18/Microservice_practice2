import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on sucessful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: "test@test.com",
      password: "password"
    })
    .expect(201)
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: "tesdfadsf",
      password: "password"
    })
    .expect(400)
})

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: "test@test.com",
      password: "pa"
    })
    .expect(400)
})

it('returns a 400 with missing email and password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: "test@",
      password: "pa"
    })
    .expect(400)
})