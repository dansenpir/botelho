import { UserRepository } from '../repositories/UserRepository';

export default class DeleteUser {
  private repository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public async execute(id: number) {
    return await this.repository.delete(id);
  }
}
