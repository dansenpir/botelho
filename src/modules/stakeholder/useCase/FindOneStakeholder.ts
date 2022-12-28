import { StakeholderRepository } from '../repositories/StakeholderRepository';

export default class FindOneStakeholder {
  private repository;

  constructor(repository: StakeholderRepository) {
    this.repository = repository;
  }

  public async execute(id: number) {
    return await this.repository.findOneById(id);
  }
}
