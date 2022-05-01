import { app, server } from '../libs/server.js'
import supertest from 'supertest'

const api = supertest(app)

describe('GET /example/msj', () => {
  it('Deberia devolver un string', async () => {
    const response = await api.get('/example/msj').send()

    expect(response.status).toBe(200)
    expect(response.body).toBe('Welcome!')
  })
})

afterAll(() => {
  server.close()
})
