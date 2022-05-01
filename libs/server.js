import express from 'express'

const PORT = 3000
const app = express()
app.use(express.json())

app.get('/example/msj', (request, response) => {
  response.json('Welcome!')
})

const server = app.listen(PORT, () => {
  console.log(`API ejecutandose en localhost:${PORT}`)
})

export {
  app,
  server
}
