// import Grade from './../models/grade';
import Grade from '../models/grade';
import GradeJsonService from './../services/GradeJsonService';
import GreadeJsonService from './../services/GradeJsonService';

class GradeService {
  async getAll() {
    //return await Grade.find();

    const data = await GreadeJsonService.readFile();
    return data;
  }

  async update(id, data) {
    const all = await this.getAll();
    const newArray = Array.from(all.grades);
    const index = newArray.findIndex((x) => x.id === id);
    all.grades[index] = data;

    await GradeJsonService.writeFile(all);
    return data;
  }

  async store(data) {
    const id = await this.nextId();
    const all = await this.getAll();
    const newData = { ...data, timestamp: new Date(), id };
    all.nextId = id;
    all.grades.push(newData);

    GradeJsonService.writeFile(all);

    return newData;
  }

  async findById(id) {
    const all = await this.getAll();
    const data = all.grades.find((x) => x.id === parseInt(id));

    return data;
  }
  async delete(id) {
    const all = await this.getAll();
    const one = await this.findById(id);

    const index = all.grades.indexOf(one, 0);

    all.grades.splice(index, 1);

    await GradeJsonService.writeFile({ ...all, nextId: all.nextId - 1 });

    return one;
  }

  async nextId() {
    const all = await this.getAll();
    const newSort = all.grades.sort((a, b) => {
      return b.id - a.id;
    });

    const data = newSort[0];
    if (data) return data.id + 1;
    else return 1;
  }

  async sumTotalAlunoDisciplina(student, subject) {
    const all = await this.getAll();
    const disciplinas = all.grades.filter(
      (x) => x.student === student && x.subject === subject
    );
    let total = disciplinas.reduce((acc, item) => {
      return (acc += item.value);
    }, 0);

    return { total };
  }

  async avgGrades(subject, type) {
    const all = await this.getAll();
    const disciplinas = all.grades.filter(
      (x) => x.type === type && x.subject === subject
    );

    let total = disciplinas.length;

    let sum = disciplinas.reduce((acc, item) => {
      return (acc += item.value);
    }, 0);

    let avg = (sum / total).toFixed(0);

    return { avg };
  }

  async threeBetterGrades(subject, type) {
    const all = await this.getAll();
    const disciplinas = all.grades.filter(
      (x) => x.type === type && x.subject === subject
    );

    const orderned = disciplinas.sort((a, b) => {
      return b.value - a.value;
    });

    const newArray = orderned.slice(0, 3).map((item) => {
      return item;
    });

    return newArray;
  }
}

export default new GradeService();
