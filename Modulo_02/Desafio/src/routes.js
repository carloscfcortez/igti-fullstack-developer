import express from 'express';
import GradeController from './controllers/grade.controller';
const router = express.Router();

//grades controller
router.get('/', GradeController.getAll);

router.get('/:id', GradeController.getById);

router.post('/', GradeController.store);

router.put('/:id', GradeController.update);

router.delete('/:id', GradeController.delete);

router.post(
  '/sum-total-aluno-disciplina',
  GradeController.sumTotalAlunoDisciplina
);
router.post('/avg-grades', GradeController.avgGrades);

router.post('/three-better-grades', GradeController.threeBetterGrades);

export default router;
