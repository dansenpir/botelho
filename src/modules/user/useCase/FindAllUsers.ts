import { UserRepository } from '../repositories/UserRepository';

export default class FindAllUsers {
  private repository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public async execute() {
    return await this.repository.findAll();
  }
}
