import { Request, Response } from 'express';
import { StakeholderRepository } from './repositories/StakeholderRepository';
import { IStakeholder } from '../../interfaces/IStakeholder';
import CreateStakeholder from './useCase/CreateStakeholder';
import DeleteStakeholder from './useCase/DeleteStakeholder';

const repository = new StakeholderRepository();

export default class StakeholderController {
  static async create(req: Request, res: Response) {
    const { catalog_service, id_user }: IStakeholder = req.body;

    const createStakeholder = new CreateStakeholder(repository);

    await createStakeholder.execute({ catalog_service, id_user });

    return res.sendStatus(201);
  }

  static async delete(req: Request, res: Response) {
    const id: number = req.body.id;

    const deleteStakeholder = new DeleteStakeholder(repository);

    await deleteStakeholder.execute(id);

    return res.sendStatus(200);
  }
}
