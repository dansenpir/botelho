import { Request, Response } from 'express';
import { StakeholderRepository } from './repositories/StakeholderRepository';
import { IStakeholder } from '../../interfaces/IStakeholder';
import CreateStakeholder from './useCase/CreateStakeholder';

const repository = new StakeholderRepository();

export default class StakeholderController {
  static async create(req: Request, res: Response) {
    const { catalog_service, id_user }: IStakeholder = req.body;

    const createStakeholder = new CreateStakeholder(repository);

    await createStakeholder.execute({ catalog_service, id_user });

    return res.sendStatus(201);
  }
}
