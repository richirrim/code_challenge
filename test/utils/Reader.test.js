import fs from 'fs'
import Reader from '../../libs/utils/Reader'

describe('Reader class', () => {
  it('Devuelve un json parciado, usando la libreria fs, con la info de los students de Visual Partner-Ship.', () => {
    const students = Reader.readJsonFile('students.test.json')

    const studentsList = [
      {
        id: '6264d5d89f1df827eb84bb23',
        name: 'Warren',
        email: 'Todd@visualpartnership.xyz',
        credits: 508,
        enrollments: [
          'Visual Thinking Intermedio',
          'Visual Thinking Avanzado'
        ],
        previousCourses: 1,
        haveCertification: true
      },
      {
        id: '6264d5d85cf81c496446b67f',
        name: 'Lucinda',
        email: 'Sexton@visualpartnership.xyz',
        credits: 677,
        enrollments: [
          'Visual Thinking Avanzado'
        ],
        previousCourses: 6,
        haveCertification: true
      },
      {
        id: '6264d5d8cda17de0d2e9f236',
        name: 'Fuentes',
        email: 'Sharlene@visualpartnership.xyz',
        credits: 210,
        enrollments: [
          'Visual Thinking Avanzado'
        ],
        previousCourses: 10,
        haveCertification: false
      },
      {
        id: '6264d5d8878a117a9c57c5c4',
        name: 'Claudia',
        email: 'Howell@visualpartnership.xyz',
        credits: 227,
        enrollments: [
          'Visual Thinking Avanzado'
        ],
        previousCourses: 5,
        haveCertification: true
      }
    ]

    expect(students).toEqual(studentsList)
  })
})
