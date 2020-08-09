import GradeService from './../services/GradeService';

class GradeController {
  async getAll(req, res, next) {
    try {
      const data = await GradeService.getAll();
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async store(req, res, next) {
    try {
      const data = await GradeService.store(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const data = await GradeService.update(parseInt(req.params.id), req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const data = await GradeService.delete(id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await GradeService.findById(parseInt(id));
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async sumTotalAlunoDisciplina(req, res, next) {
    try {
      const { student, subject } = req.body;
      const data = await GradeService.sumTotalAlunoDisciplina(student, subject);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async avgGrades(req, res, next) {
    try {
      const { subject, type } = req.body;
      const data = await GradeService.avgGrades(subject, type);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async threeBetterGrades(req, res, next) {
    try {
      const { subject, type } = req.body;
      const data = await GradeService.threeBetterGrades(subject, type);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default new GradeController();
