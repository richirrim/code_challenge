import fs from 'fs'

class Reader {
  static readJsonFile (path) {
    const data = fs.readFileSync(path)
    return JSON.parse(data)
  }
}

export default Reader
