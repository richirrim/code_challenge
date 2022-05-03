import StudentService from '../../libs/services/StudentService'
import students from './../students.test.json'

describe('StudentService class', () => {
  describe('Static method: getAllStudent', () => {
    it('Devuelve una lista de estudiantes', () => {
      const studentsList = StudentService.getAllStudent(students)

      expect(studentsList.length).toBe(4)
      expect(studentsList[0].name).toContain('Warren')
      expect(studentsList[1].name).toContain('Lucinda')
      expect(studentsList[2].name).toContain('Fuentes')
      expect(studentsList[3].name).toContain('Claudia')
    })

    it('Validad que el array devuelto no este empty', () => {
      const studentsList = StudentService.getAllStudent(students)
      expect(studentsList).not.toHaveLength(0)
    })

    it('Validad que el objeto devuelto sea un array', () => {
      const studentsList = StudentService.getAllStudent(students)
      expect(Array.isArray(studentsList)).toBeTruthy()
    })
  })

  describe('Static method: getStudentEmailsWithCertificates', () => {
    it('Devuelve el email de los estudiantes que están certificados', () => {
      const emailList = StudentService.getStudentEmailsWithCertificates(students)
      const emails = [
        'Todd@visualpartnership.xyz',
        'Sexton@visualpartnership.xyz',
        'Howell@visualpartnership.xyz'
      ]

      expect(emailList.length).toBe(3)
      expect(emailList).toEqual(emails)
    })

    it('Validad que el array devuelto no este empty', () => {
      const emailList = StudentService.getStudentEmailsWithCertificates(students)
      expect(emailList).not.toHaveLength(0)
    })

    it('Validad que el elemento devuelto sea un array', () => {
      const emailList = StudentService.getStudentEmailsWithCertificates(students)
      expect(Array.isArray(emailList)).toBeTruthy()
    })
  })

  describe('Static method: getStudentWithCreditsGreaterThan', () => {
    it('Devuelve todos los estudiantes con creditos mayores a 500', () => {
      const studentsList = StudentService.getStudentWithCreditsGreaterThan(students)

      expect(studentsList[0].credits).toBeGreaterThan(500)
      expect(studentsList[1].credits).toBeGreaterThan(500)
    })

    it('Validad que el array devuelto no este empty', () => {
      const studentsList = StudentService.getStudentWithCreditsGreaterThan(students)
      expect(studentsList).not.toHaveLength(0)
    })

    it('Validad que el elemento devuelto sea un array', () => {
      const studentsList = StudentService.getStudentWithCreditsGreaterThan(students)
      expect(Array.isArray(studentsList)).toBeTruthy()
    })
  })
})
