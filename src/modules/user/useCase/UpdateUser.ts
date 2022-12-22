import { IUser } from '../../../interfaces';
import { UserRepository } from '../repositories/UserRepository';

export default class UpdateUser {
  private repository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public async execute({ id, username }: IUser) {
    await this.repository.update({ id, username });
  }
}
