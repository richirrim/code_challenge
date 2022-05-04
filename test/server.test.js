import { app, server } from '../libs/server.js'
import supertest from 'supertest'

const api = supertest(app)

describe('GET /students', () => {
  it('Deberia devolver todos los estudiantes de Visual Partner-Ship', async () => {
    const response = await api.get('/students').send()

    expect(response.status).toBe(200)
    expect(response.type).toEqual(expect.stringContaining('json'))
    expect(response.body).not.toHaveLength(0)
  })
})

describe('GET /students/emails', () => {
  it('Deberia devolver los emails de los estudiantes con certificado', async () => {
    const response = await api.get('/students/emails').send()

    expect(response.status).toBe(200)
    expect(response.type).toEqual(expect.stringContaining('json'))
    expect(response.body).not.toHaveLength(0)
    expect(response.body[0]).toEqual(expect.stringContaining('@visualpartnership.xyz'))
  })
})

describe('GET /students/credits', () => {
  it('Deberia devolver solo los estudiantes con creditos mayores que 500', async () => {
    const response = await api.get('/students/credits').send()

    expect(response.status).toBe(200)
    expect(response.type).toEqual(expect.stringContaining('json'))
    expect(response.body).not.toHaveLength(0)
    expect(response.body[0]).toHaveProperty('credits', expect.any(Number))
    expect(response.body[0].credits).toBeGreaterThan(500)
  })
})

afterAll(() => {
  server.close()
})
