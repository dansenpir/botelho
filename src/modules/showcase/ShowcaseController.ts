import { Request, Response } from 'express';
import { IShowcase } from '../../interfaces';
import { ShowcaseRepository } from './repositories/ShowcaseRepository';
import CreateShowcase from './useCase/CreateShowcase';

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
}
