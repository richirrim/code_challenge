import StudentService from '../services/StudentService'
import Reader from '../lib/utils/Reader'

class StudentController {
  static getAllStudent () {
    const students = Reader.readJsonFile('students.json')
    const studensList = StudentService.getAllStudent(students)
    return studensList
  }

  static getStudentEmailsWithCertificates () {
    const students = Reader.readJsonFile('students.json')
    const emailList = StudentService.getStudentEmailsWithCertificates(students)
    return emailList
  }

  static getStudentWithCreditsGreaterThan () {
    const students = Reader.readJsonFile('students.json')
    const studentsWithGreaterThat500 = StudentService.getStudentWithCreditsGreaterThan(students)
    return studentsWithGreaterThat500
  }
}

export default StudentController
