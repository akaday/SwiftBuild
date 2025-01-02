const request = require('supertest');
const app = require('../../app');

describe('Sample Integration Test', () => {
  it('should return 200 OK for the home route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should return 404 Not Found for an unknown route', async () => {
    const response = await request(app).get('/unknown');
    expect(response.status).toBe(404);
  });
});
