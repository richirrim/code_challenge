import StudentController from './controllers/StudentController.js'
import express from 'express'

const PORT = 3000
const app = express()
app.use(express.json())

app.get('/students', (request, response) => {
  const students = StudentController.getAllStudent()
  response.json(students)
})

app.get('/students/emails', (request, response) => {
  const emails = StudentController.getStudentEmailsWithCertificates()
  response.json(emails)
})

app.get('/students/credits', (request, response) => {
  const students = StudentController.getStudentWithCreditsGreaterThan500()
  response.json(students)
})

const server = app.listen(PORT, () => {
  console.log(`API ejecutandose en localhost:${PORT}`)
})

export {
  app,
  server
}
