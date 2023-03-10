import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Abner',
      sobrenome: 'Vidal',
      email: 'abnernegreros123@gmail.com',
      idade: 21,
      peso: 70,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
