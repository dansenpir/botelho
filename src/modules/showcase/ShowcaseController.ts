import { Request, Response } from 'express';
import { IShowcase } from '../../interfaces';
import { ShowcaseRepository } from './repositories/ShowcaseRepository';
import CreateShowcase from './useCase/CreateShowcase';
import DeleteShowcase from './useCase/DeleteShowcase';
import FindAllShowcases from './useCase/FindAllShowcases';

const repository = new ShowcaseRepository();

export default class ShowcaseController {
  static async create(req: Request, res: Response) {
    const { access_type, amount, catalog_service, id_user, status }: IShowcase =
      req.body;

    const createShowcase = new CreateShowcase(repository);

    await createShowcase.execute({
      access_type,
      amount,
      catalog_service,
      id_user,
      status,
    });

    return res.sendStatus(201);
  }

  static async delete(req: Request, res: Response) {
    const id: number = req.body.id;

    const deleteShowcase = new DeleteShowcase(repository);

    await deleteShowcase.execute(id);

    return res.sendStatus(200);
  }

  static async findAll(res: Response) {
    const findAllShowcases = new FindAllShowcases(repository);

    const showcases = await findAllShowcases.execute();

    return res.status(200).json(showcases);
  }
}
