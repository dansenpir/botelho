import { Request, Response } from 'express';
import { UserRepository } from './repositories/UserRepository';
import { IUser } from '../../interfaces';
import CreateUser from './useCase/CreateUser';
import DeleteUser from './useCase/DeleteUser';

const repository = new UserRepository();

export default class UserController {
  static async create(req: Request, res: Response) {
    const { id, username }: IUser = req.body;

    const createUser = new CreateUser(repository);

    await createUser.execute({ id, username });

    return res.sendStatus(201);
  }

  static async delete(req: Request, res: Response) {
    const id: number = req.body.id;

    const deleteUser = new DeleteUser(repository);

    await deleteUser.execute(id);

    return res.sendStatus(200);
  }
}
