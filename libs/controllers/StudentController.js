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
}

export default StudentController
