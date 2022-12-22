import { IUser } from '../../../interfaces';
import { UserRepository } from '../repositories/UserRepository';

export default class CreateUser {
  private repository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public async execute({ id, username }: IUser): Promise<void> {
    await this.repository.create({ id, username });
  }
}
