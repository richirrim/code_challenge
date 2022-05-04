import { app, server } from '../libs/server.js'
import supertest from 'supertest'

const api = supertest(app)

describe('GET /example/msj', () => {
  it('Deberia devolver todos los estudiantes de Visual Partner-Ship', async () => {
    const response = await api.get('/students').send()

    expect(response.status).toBe(200)
    expect(response.type).toEqual(expect.stringContaining('json'))
    expect(response.body).not.toHaveLength(0)
  })
})

afterAll(() => {
  server.close()
})
