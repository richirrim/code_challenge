class StudentService {
  static getAllStudent (students) {
    return students
  }

  static getStudentEmailsWithCertificates (students) {
    const studentWithCertification = students.filter(student => student.haveCertification)
    return studentWithCertification.map(student => student.email)
  }

  static getStudentWithCreditsGreaterThan (students) {
    return students.filter(student => student.credits > 500)
  }
}

export default StudentService
