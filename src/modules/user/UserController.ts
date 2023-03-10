import { Request, Response } from 'express';
import { UserRepository } from './repositories/UserRepository';
import { IUser } from '../../interfaces';
import CreateUser from './useCase/CreateUser';
import DeleteUser from './useCase/DeleteUser';
import FindAllUsers from './useCase/FindAllUsers';
import FindOneUser from './useCase/FindOneUser';
import UpdateUser from './useCase/UpdateUser';

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

  static async findAll(res: Response) {
    const findAllUsers = new FindAllUsers(repository);

    const users = await findAllUsers.execute();

    return res.status(200).json(users);
  }

  static async findOneById(req: Request, res: Response) {
    const id: number = req.body.id;

    const findOneUser = new FindOneUser(repository);

    const user = await findOneUser.execute(id);

    return res.status(200).json(user);
  }

  static async update(req: Request, res: Response) {
    const id: number = req.body.id;
    const username: string = req.body.id;

    const updateUser = new UpdateUser(repository);

    await updateUser.execute({ id, username });

    return res.sendStatus(200);
  }
}
