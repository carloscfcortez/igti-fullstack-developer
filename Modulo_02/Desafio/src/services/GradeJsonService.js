import fs from 'fs';

const FILE_PATH = './src/database/grades.json';

class GradeJsonServie {
  async readFile() {
    const data = await fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  }

  async writeFile(data) {
    await fs.writeFileSync(
      FILE_PATH,
      JSON.stringify(data, null, 2),
      (error) => {
        if (error) console.log(error);
      }
    );
  }
}

export default new GradeJsonServie();
