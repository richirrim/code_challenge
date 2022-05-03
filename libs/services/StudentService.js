class StudentService {
  static getAllStudent (students) {
    return students.map(student => student)
  }

  static getStudentEmailsWithCertificates (students) {
    const studentWithCertification = students.filter(student => student.haveCertification)
    return studentWithCertification.map(student => student.email)
  }
}

export default StudentService
