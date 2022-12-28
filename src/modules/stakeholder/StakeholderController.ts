import { Request, Response } from 'express';
import { StakeholderRepository } from './repositories/StakeholderRepository';
import { IStakeholder } from '../../interfaces/IStakeholder';
import CreateStakeholder from './useCase/CreateStakeholder';
import DeleteStakeholder from './useCase/DeleteStakeholder';
import FindAllStakeholders from './useCase/FindAllStakeholders';
import FindOneStakeholder from './useCase/FindOneStakeholder';
import UpdateStakeholder from './useCase/UpdateStakeholder';

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

  static async findAll(res: Response) {
    const findAllStakeholders = new FindAllStakeholders(repository);

    const stakeholders = await findAllStakeholders.execute();

    return res.status(200).json(stakeholders);
  }

  static async findOneById(req: Request, res: Response) {
    const id: number = req.body.id;

    const findOneStakeholder = new FindOneStakeholder(repository);

    const stakeholder = findOneStakeholder.execute(id);

    return res.status(200).json(stakeholder);
  }

  static async update(req: Request, res: Response) {
    const { catalog_service, id_user }: IStakeholder = req.body;

    const updateStakeholder = new UpdateStakeholder(repository);

    await updateStakeholder.execute({ catalog_service, id_user });

    return res.sendStatus(200);
  }
}
